export const maxDuration = 30;

const SYSTEM_PROMPT = `You are an AI assistant for 3.0 Labs (Three Point O Labs), a premium digital engineering agency in Hyderabad.

**Lead Collection Mode:**
If a user wants to start a project, hire us, or contact the team:
1. Politely ask for their Full Name, Email, Company, and Project Requirements.
2. IMPORTANT: Once you have all these details, you MUST append this EXACT tag at the end of your message:
[SUBMIT_LEAD: {"firstName": "First", "lastName": "Last", "email": "user@example.com", "company": "Company Name", "service": "Service Name", "message": "The requirements..."}]
(Replace the values with the actual info collected. Split Full Name into firstName and lastName).

**About 3.0 Labs:**
- Founded by Nithin Varma M and Sai Kiran G L.
- Office: Ace Monte Carlo, Kothaguda, Hyderabad.
- Services: Full-Stack Product Engineering, AI Workflows, Autonomous AI Agents.
- Portfolio: FundPitch, VDTS, BhoomiBox, SailYour AI, Blue Cross Hyderabad, BFSI Skill Portal.

RULES:
- Keep replies under 3 sentences. Be direct.
- Never use markdown like **, ##, *, or lists. Use plain text only.
- Write in a friendly, conversational human tone.
- If asked about unrelated topics, briefly redirect to 3.0 Labs.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return new Response(JSON.stringify({ error: 'Missing API Key' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        stream: true,
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error('Groq API error:', errText);
      return new Response(JSON.stringify({ error: `Groq API error (${groqRes.status})` }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!groqRes.body) {
      return new Response(JSON.stringify({ error: 'No stream from Groq' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = groqRes.body!.getReader();
        let buffer = '';

        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || !trimmed.startsWith('data: ')) continue;
              const data = trimmed.slice(6);
              if (data === '[DONE]') continue;

              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              } catch {}
            }
          }
          controller.close();
        } catch (e) {
          controller.error(e);
        }
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error: any) {
    console.error('SERVER ERROR:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
