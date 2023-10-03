import {Goals} from "../models/goals.model"

const getGoals=async (req, res) => {
    try {
      const goals = await Goals.find();
      if(goals)
      res.status(200).json({goals});
    else
    res.status(400).json({message:"Goals not found"})
    } catch (err) {
      res.status(500).json({ error: 'Error fetching food.' });
    }
  }

  const postGoals=async (req, res) => {
    try {
      const { name, description, targetDate, targetCaloriesValue, status } = req.body;
      const convertedDate=new Date(targetDate)
      const goal = new Goals({ name, description, convertedDate, targetCaloriesValue, status });
      const createdGoals=await goal.save();
      if(createdGoals)
      res.status(201).json(createdGoals);
    else
    res.status(400).json({message:"Goal not added"})
    }
    catch (error) {
      res.status(500).json({ error: 'Error adding Goal.' });
    }
  }


  const deleteGoals=async (req, res) => {
    const goalId = req.params.goalId;
    try {
      const deletedGoal = await Goals.findByIdAndRemove(goalId);
  
      if (!deletedGoal) {
        return res.status(404).json({ error: 'Goal not found.' });
      }
      res.status(204).json({ message: "Goal Deleted" });
    } catch (err) {
      res.status(500).json({ error: 'Error deleting food.' });
    }
  }
  
  export {getGoals,postGoals,deleteGoals}