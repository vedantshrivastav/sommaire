import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  full_name?: string;
  customer_id?: string;
  price_id?: string;
  status: 'active' | 'inactive';
  created_at: Date;
  updated_at: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  full_name: { type: String },
  customer_id: { type: String },
  price_id: { type: String },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', UserSchema);
