import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({ name: { type: String, required: true }, slug: { type: String, unique: true }, description: String, price: { type: Number, required: true }, currency: { type: String, default: 'ZAR' }, deliveryUrl: String, published: { type: Boolean, default: false } }, { timestamps: true });
export default mongoose.models.Product || mongoose.model('Product', productSchema);
