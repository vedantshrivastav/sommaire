import mongoose, { Schema, Document } from 'mongoose';

export interface IPdfSummary extends Document {
  user_id: string;
  original_file_url?: string;
  summary_text?: string;
  status?: string;
  title?: string;
  file_name?: string;
  created_at: Date;
  updated_at: Date;
}

const PdfSummarySchema: Schema<IPdfSummary> = new Schema({
  user_id: { type: String, ref: 'User', required: true },
  original_file_url: String,
  summary_text: String,
  status: String,
  title: String,
  file_name: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const PdfSummary = mongoose.model<IPdfSummary>('PdfSummary', PdfSummarySchema);
export default PdfSummary;
