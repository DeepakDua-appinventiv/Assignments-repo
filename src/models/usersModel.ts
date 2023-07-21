import mongoose, {Document, Schema} from "mongoose"

interface profile {
    name : String,
    bio : String,
    accout_type : String,
}

interface User extends Document {
  username: String;
  email: String;
  password: String;
  profile: profile;
  created_at: Date;
  updated_at : Date;
}

const profileSchema = new mongoose.Schema({
    name : { type: String},
    bio :{ type: String},
    accout_type : { type: String},
});

// Define the schema for the post collection
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile: { type : profileSchema},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

export default mongoose.model<User>('User', userSchema);