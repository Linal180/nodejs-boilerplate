import mongoose from "mongoose";

// Dummy Post Schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model('Post', postSchema);

// Dummy Comment Schema
const commentSchema = new mongoose.Schema({
  text: String,
});

const likeSchema = new mongoose.Schema({  
  isDislike: {
    type: Boolean,
    default: false,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  likedObject: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'likedObjectType',
  },

  likedObjectType: {
    type: String,
    enum: ['Post', 'Comment'],
  },
});

export default mongoose.model('user', likeSchema);
