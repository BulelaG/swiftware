import mongoose from 'mongoose';
const invoiceSchema = new mongoose.Schema({ client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }, amount: { type: Number, required: true }, currency: { type: String, default: 'ZAR' }, status: { type: String, enum: ['draft', 'issued', 'paid', 'overdue', 'cancelled'], default: 'draft' }, dueAt: Date }, { timestamps: true });
export default mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);
