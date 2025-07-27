import { SUMMARY_SYSTEM_PROMPT } from "./prompts";
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY
});

export const generateSummaryFromGemini = async (pdfText: string) => {
    console.log('Inside the geminiAI function')
  try {
    const prompt = `${SUMMARY_SYSTEM_PROMPT}\n\nTransform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`;

    const result = await genAI.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
    },
);
    if(!result.text){
        throw new Error('Empty Response from Gemini API')
    }
    return result.text;
  } catch (error: any) {
    console.log('Error from gemini AI',error)
    throw error;
  }
};
