import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  user_email: string;
  amount?: number;
  status?: string;
  stripe_payment_id?: string;
  price_id?: string;
  created_at: Date;
  updated_at: Date;
}

const PaymentSchema: Schema<IPayment> = new Schema({
  user_email: { type: String, required: true },
  amount: Number,
  status: String,
  stripe_payment_id: String,
  price_id: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export default mongoose.model<IPayment>('Payment', PaymentSchema);
