import mongoose from 'mongoose';
const messageSchema = new mongoose.Schema({ project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }, sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, body: { type: String, required: true, maxlength: 5000 }, attachments: [String] }, { timestamps: true });
export default mongoose.models.Message || mongoose.model('Message', messageSchema);
