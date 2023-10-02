import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true
  },
  protein: {
    type: Number,
    required: true,
  },
  carbohydrates: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  }
})

const Food = mongoose.model('Food', foodSchema);

export { Food }