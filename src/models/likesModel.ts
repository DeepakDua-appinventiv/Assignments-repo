import mongoose, {Document, Schema} from "mongoose"

interface Like extends Document {
    user: object;
    post: object;
    like_count: Number;
    created_at : Date;
}

// Define the schema for the follow/following collection
const likeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now },
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;
export default mongoose.model<Like>('Like', likeSchema);