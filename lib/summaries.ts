import mongoose from 'mongoose';
import connectDB from '../db/config';
import PdfSummaryModel from '../db/models/pdfSummary'; // ✅ default import

export async function getSummaries(userId: string) {
  await connectDB(); // this connects to MongoDB via Mongoose
  const summaries = await PdfSummaryModel.find({ user_id: userId })
    .sort({ created_at: -1 })
    .exec();

  return summaries;
}

export default async function getSummaryById(id: string) {
  try {
    await connectDB();

    // Validate the ID before querying
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.error("Invalid MongoDB ObjectId:", id);
      return null;
    }

    const summary = await PdfSummaryModel.findById(id).lean();
    const word_count = summary?.summary_text?.trim().split(/\s+/).length;
    return{
      ...summary,
      word_count
    }
  } catch (error: any) {
    console.error("Error fetching summary by ID:", error);
    return null;
  }
}