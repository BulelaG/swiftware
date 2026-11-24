import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({ buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, amount: { type: Number, required: true }, status: { type: String, enum: ['pending', 'paid', 'failed', 'refunded'], default: 'pending' }, paymentReference: String }, { timestamps: true });
export default mongoose.models.Order || mongoose.model('Order', orderSchema);
