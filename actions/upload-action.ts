'use server';

import connectDB from "@/db/config";
import { generateSummaryFromGemini } from "@/lib/geminiai";
import { fetchandparsePdfText } from "@/lib/langchain";
import { generateSummaryfromOpenAi } from "@/lib/openai";
import { auth } from "@clerk/nextjs/server";
import { success } from "zod";
import PdfSummary, { IPdfSummary } from "../db/models/pdfSummary";
import mongoose from "mongoose";
import { formattedfilenameasTitle } from "@/lib/format-util";
import { revalidatePath } from "next/cache";

interface SavePdfSummaryParams {
  userId: string;
  pdfurl: string;
  summaryText: string;
  fileName: string;
  title?: string;
}
interface storePdfSummaryAcionParams{
    pdfurl : string,
    summaryText: string;
  fileName: string;
  title?: string;
}

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
     const formattedFileName = formattedfilenameasTitle(uploadResponse[0].name);
     return{
        success : true,
        message : 'Summary generated successfully',
        data : {
            title : formattedFileName,
            summaryfromAI,
        }
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

export async function savePdfSummary({
  userId,
  pdfurl,
  summaryText,
  fileName,
  title
}: SavePdfSummaryParams) {
  try {
    await connectDB();

    const pdfSummary = new PdfSummary({
      user_id: userId,
      original_file_url: pdfurl,
      summary_text: summaryText,
      status: "complete",
      title: title || fileName,
      file_name: fileName,
      created_at: new Date(),
      updated_at: new Date()
    });

    const savedSummary = (await pdfSummary.save())
    const summaryId = (savedSummary._id as mongoose.Types.ObjectId).toString();
    console.log("📄 PDF summary saved to MongoDB",summaryId);

    return {
      success: true,
      message: "Summary saved to database",
       summaryId
    };
  } catch (error) {
    console.error("Error saving the summary:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error saving summary"
    };
  }
}
let savedresult
export async function storePdfSummaryAcion({
  pdfurl,
  summaryText,
  fileName,
  title
}: storePdfSummaryAcionParams) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "User not found"
      };
    }

    const savedresult = await savePdfSummary({
      userId,
      pdfurl,
      summaryText,
      fileName,
      title
    });

    if (!savedresult || !savedresult.summaryId) {
      return {
        success: false,
        message: "Failed to save PDF summary, please try again"
      };
    }

    // Revalidate cache
    revalidatePath(`/summaries/${savedresult.summaryId}`);

    return {
      success: true,
      message: "PDF summary saved successfully",
      id : savedresult.summaryId
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error saving the pdf summary"
    };
  }
}

