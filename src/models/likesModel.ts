import mongoose, {Document, Schema} from "mongoose"

interface Like extends Document {
    user_id: String;
    post_id: String;
    like_count: Number;
    created_at : Date;
}

// Define the schema for the follow/following collection
const likeSchema = new mongoose.Schema({
    user_id: { type: String, ref: 'User', required: true },
    post_id: { type: String, ref: 'Post', required: true },
    created_at: { type: Date, default: Date.now },
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;
export default mongoose.model<Like>('Like', likeSchema);