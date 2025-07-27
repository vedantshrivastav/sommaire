'use server';

import { generateSummaryFromGemini } from "@/lib/geminiai";
import { fetchandparsePdfText } from "@/lib/langchain";
import { generateSummaryfromOpenAi } from "@/lib/openai";
import { success } from "zod";

export async function generatePdfSummary(
  uploadResponse: any[]
) {
  console.log("Here is the uploadResponse:", uploadResponse);

  if (!uploadResponse) {
    return {
      success: false,
      message: 'File upload failed from uploadResponse',
      data: null,
    };
  }

   const {
    serverData: { userId, file },
    ufsUrl: pdfurl,
  } = uploadResponse[0]; // ✅ Fixed: added missing closing brace

  if (!pdfurl) {
    return {
      success: false,
      message: 'File upload failed from pdfurl',
      data: null,
    };
  }
   let summaryfromAI;
  try {
    const pdfText = await fetchandparsePdfText(pdfurl);
    console.log({ pdfText });
     
     try{
        console.log("Calling the gemini AI function")
        summaryfromAI = await generateSummaryFromGemini(pdfText)
        console.log('following is the summaryfromAI',{summaryfromAI})
     } catch(err){
         console.log(err)
     }
     if(!summaryfromAI){
        return{
            success : false,
            message : 'failed to generate summary',
            data : null
        }
     }
     return{
        success : true,
        message : 'Summary generated successfully',
        data : summaryfromAI
     }
   
  } catch (err) {
    console.error("Error during PDF parsing:", err);
    return {
      success: false,
      message: 'File upload failed during PDF parsing',
      data: null,
    };
  }
}
