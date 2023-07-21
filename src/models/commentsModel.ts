import mongoose, {Document, Schema} from "mongoose"

interface replies{
    user_id: String;
    content: String;
    created_at : Date;
}

interface Comment extends Document {
    user_id: String;
    post_id: String;
    replies: replies;
    comment_count: Number;
    created_at : Date;
}

// Define the schema for the follow/following collection
const commentSchema = new mongoose.Schema({
    user_id: { type: String, ref: 'User', required: true },
    post_id: { type: String, ref: 'Post', required: true },
    created_at: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
export default mongoose.model<Comment>('Comment', commentSchema);