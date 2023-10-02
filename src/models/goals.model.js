import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  targetDate: {
    type: Date,
    required: true,
  },
  targetCaloriesValue: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["In Progress", "Achieved", "Abandoned"],
    required: true,
  }
})

const Goals = mongoose.model('Goals', goalSchema);

export { Goals }