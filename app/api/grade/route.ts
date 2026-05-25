import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { question, answer } = await request.json();

  const response = await openai.chat.completions.create({
    model: "gpt-5.4-mini",
    messages: [
      {
        role: "system",
        content:
          "You are an engineering technical interviewer. Give concise feedback on conceptual correctness, missing engineering reasoning, and clarity. When using equations, ALWAYS use Markdown math syntax. Inline equations use $\\sigma = \\frac{My}{I}$ and block equations use $$\\sigma = \\frac{My}{I}$$. Never output equations using \\(...\\) or \\[...\\]. Keep responses under 120 words."
      },
    {
    role: "user",
    content: `
    Question:
    ${question}

    Candidate Answer:
    ${answer}
    `
    }
    ],
  });

  return Response.json({
    feedback: response.choices[0].message.content,
  });
}