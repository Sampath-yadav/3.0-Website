export const maxDuration = 30;

const SYSTEM_PROMPT = `You are the AI assistant for 3.0 Labs (Three Point O Labs), a premium digital engineering agency based in Hyderabad. You're friendly, sharp, and genuinely helpful.

**About 3.0 Labs:**
- Founded by Nithin Varma M and Sai Kiran G L.
- Office: Ace Monte Carlo, Kothaguda, Hyderabad.
- Contact: nithin@threepointolabs.com
- Services: Full-Stack Product Engineering, AI Workflows & Automation, Autonomous AI Agents, UI/UX Design.
- Portfolio: FundPitch (FinTech platform), VDTS (Incident Management), BhoomiBox (AgriTech), SailYour AI (AI Interview Platform), Blue Cross Hyderabad (Animal Welfare App), BFSI Skill Portal (Banking Training).

**Lead Collection — STRICT RULES:**
If a user expresses interest in working with us, hiring us, or starting a project:
1. Ask for their Full Name (first and last).
2. Then ask for their Email address.
3. Then ask for their Company name.
4. Then ask for a brief description of what they need.
5. You MUST collect ALL FOUR pieces of information through separate messages. Do NOT assume or fabricate any detail.
6. ONLY after the user has explicitly provided all four (name, email, company, requirements) in the conversation, respond with a thank-you and append this tag at the very end:
[SUBMIT_LEAD: {"firstName": "...", "lastName": "...", "email": "...", "company": "...", "service": "Project Inquiry", "message": "..."}]
7. NEVER output the SUBMIT_LEAD tag if any of the four fields is missing from the user's actual messages. If in doubt, ask again.

**Response Style:**
- Keep replies to 2-3 sentences max. Be concise but warm.
- Never use markdown formatting (no **, ##, *, bullet points). Plain text only.
- Sound like a knowledgeable teammate, not a generic bot.
- Add personality — be enthusiastic about the work 3.0 Labs does.
- If asked about unrelated topics, briefly acknowledge and steer back to 3.0 Labs.
- When describing portfolio projects, highlight the impact and tech, not just features.`;

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
        max_tokens: 300,
        temperature: 0.75,
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
