import {Food} from "../models/food.model";

const getFood=async (req, res) => {
    try {
      const food = await Food.find();
      if(food)
      res.status(200).json({food});
        else
        res.status(400).json({message:"Food not found"})
    } catch (err) {
      res.status(500).json({ error: 'Error fetching food.' });
    }
  }

  const postFood=async (req, res) => {
    try {
      const { name, calories, protein, carbohydrates, fat } = req.body;
  
      const food = new Food({ name, calories, protein, carbohydrates, fat });
        const createdFood=await food.save();
        if(createdFood)
      res.status(201).json({createdFood});
    else
    res.status(400).json({message:"Food not added"})
    }
    catch (error) {
      res.status(500).json({ error: 'Error adding Food.' });
    }
  }
  
  const deleteFood=async (req, res) => {
    try {
    const foodId = req.params.foodId;
      const deletedFood = await Food.findByIdAndRemove(foodId);
      if (!deletedFood) {
        return res.status(404).json({ error: 'Food not found.' });
      }
      res.status(204).json({ message: "Food Deleted" });
    } catch (err) {
      res.status(500).json({ error: 'Error deleting food.' });
    }
  }
  export {getFood,postFood,deleteFood};