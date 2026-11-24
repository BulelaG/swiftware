import mongoose from 'mongoose';
const leadSchema = new mongoose.Schema({ name: { type: String, required: true }, email: String, whatsapp: String, service: String, budget: String, timeline: String, status: { type: String, enum: ['new', 'discussion', 'converted', 'lost'], default: 'new' } }, { timestamps: true });
export default mongoose.models.Lead || mongoose.model('Lead', leadSchema);
