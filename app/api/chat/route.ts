import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await streamText({
    model: "gpt-4o-mini",
    messages,
  });

  return response.toTextStreamResponse();
}
