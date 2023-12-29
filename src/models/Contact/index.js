import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  telephone: Number,
  zipCode: Number,
  city: String,
  street: String,
  houseNumber: String,
});

export default mongoose.model('contact', contactSchema);
