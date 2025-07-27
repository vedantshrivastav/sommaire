import OpenAI from "openai";
import { SUMMARY_SYSTEM_PROMPT } from "./prompts";

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY!,
});

export async function generateSummaryfromOpenAi(pdfText: string) {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4.1", // use "gpt-4" or "gpt-3.5-turbo", not "gpt-4.1"
      messages: [
        {role : "system", content : SUMMARY_SYSTEM_PROMPT},
        {
          role: "user",
          content: `Transform this document into an engaging,
          easy to read summary with contextually relavant emojis
          and proper markdown formatting:\n\n${pdfText}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const result = response.choices[0].message.content;
    console.log("OpenAI response:", result);
    return result;
  } catch (error: any) {
     if(error.status === 429){
        throw new Error('Rate Limit Exceeded')
     }
     throw error
  }
}
