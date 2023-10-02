import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true
  },
  calories: {
    type: Number,
    required: true,
  }
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

export {Exercise} 