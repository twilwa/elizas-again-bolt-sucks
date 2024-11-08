import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
export async function POST(req: Request) {
  const { messages } = await req.json();
 
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant for Elizas.xyz, an AI agent marketplace. Help users understand how to use the platform, connect their wallets, and find the right AI agents for their needs. Be concise but friendly.',
      },
      ...messages,
    ],
  });
 
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}