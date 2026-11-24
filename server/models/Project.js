import mongoose from 'mongoose';
const projectSchema = new mongoose.Schema({ client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, name: { type: String, required: true }, status: { type: String, default: 'planning' }, milestones: [{ title: String, status: String, dueAt: Date }] }, { timestamps: true });
export default mongoose.models.Project || mongoose.model('Project', projectSchema);
