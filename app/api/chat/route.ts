export const maxDuration = 30;

const SYSTEM_PROMPT = `You are an AI assistant for 3.0 Labs (Three Point O Labs), a premium digital engineering agency based in Hyderabad, India.

**About 3.0 Labs:**
- We are a product engineering company that builds AI-powered products, web apps, and custom solutions
- Founded by Nithin Varma M and Sai Kiran G L
- Office: Fourth Floor, 604, Ace Monte Carlo, x Roads, beside TCS Kohinoor Park, Kothaguda, Hyderabad, Telangana 500084
- Contact: nithin.varma@threepointolabs.com

**Our Services:**
1. Full-Stack Product Engineering — Complete web and mobile applications, scalable APIs, clean architecture
2. AI Workflows & Intelligent Automation — Multi-step process automation, integrating intelligence into products
3. Autonomous AI Agents — Agents that reason, act, and operate independently within defined boundaries

**Our Portfolio:**
1. FundPitch — A platform connecting companies with investors, merchant bankers, advisors, and service providers
2. VDTS — An intelligent system engineered for our clients
3. BhoomiBox — A direct-to-consumer platform connecting Indian farmers directly to urban families for staples and produce
4. NaviPrep (Nacacdemics) — An AI-powered smart revision platform for IB & Cambridge students with question generation and structured learning
5. Blue Cross Hyderabad (ABC Management Portal) — An animal welfare management app for Blue Cross of Hyderabad with field staff tracking, veterinary records, multi-language support (Telugu, English, Hindi), and both iOS/Android versions
6. Starlink — A digital connection platform
7. BFSI Skill Portal — A skill assessment and learning portal for the Banking, Financial Services, and Insurance sector

**Our Team:**
- Management: Srikar (Product Analyst), Griffin (Talent Acquisition), Aditya, Anjana
- Developers: Zuber, Ashvith Adepu, Sumanth G, Mohammed Aqib, Shiva, Suraj, Sumanth N, Sampath, ManojKumar, Srinivas K, Prem Kumar, Arun Sai
- Design: Dinesh, Gratian

RULES:
- Keep every reply under 3 sentences. Be short and direct.
- Never use markdown symbols like **, ##, *, bullet points, or numbered lists.
- Write in plain conversational English, like a friendly human would text.
- If asked about something unrelated to 3.0 Labs, briefly redirect to the company.
- Do not repeat the question back. Just answer it.`;

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
