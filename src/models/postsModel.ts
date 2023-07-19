import mongoose, { Document, Schema } from 'mongoose';

interface hashtags {
    user : mongoose.Schema.Types.ObjectId,
    content: String,
    created_at: Date
}

interface Post extends Document {
    user: String;
    image_URL: String;
    caption: String;
    hashtags: hashtags;
    created_at : Date;
    updated_at : Date;
}

const hashtagSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  image_URL: {type: String, required: true },
  caption: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

export default mongoose.model<Post>('Post', postSchema);