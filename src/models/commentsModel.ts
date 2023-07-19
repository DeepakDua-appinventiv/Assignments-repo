import mongoose, {Document, Schema} from "mongoose"

interface replies{
    user: object;
    content: String;
    created_at : Date;
}

interface Comment extends Document {
    user: object;
    post: object;
    replies: replies;
    comment_count: Number;
    created_at : Date;
}

// Define the schema for the follow/following collection
const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
export default mongoose.model<Comment>('Comment', commentSchema);