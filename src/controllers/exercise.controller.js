import { Exercise } from "../models/exercise.model";


function calculateCalories(name, duration) {
    let calories = 0;
    switch (name.toLowerCase()) {
      case 'cycling':
        calories = duration * 5;
        break;
      case 'swimming':
        calories = duration * 3.71;
        break;
      case 'running':
        calories = duration * 7;
        break;
      case 'pushups':
        calories = duration * 8;
        break;
      case 'pullups':
        calories = duration * 4;
        break;
      default:
        calories = 0;
    }
    return calories;
  }


const getExercises=async (req, res) => {
    try {
      const exercises = await Exercise.find();
      if(exercises)
      res.status(200).json({exercises});
        else
        res.status(400).json({message:"Exercises not found"})
    } catch (err) {
      res.status(500).json({ error: 'Error fetching exercises.' });
    }
  }

const postExercises=async (req, res) => {
    try {

    const { name, duration } = req.body;
    const calories = calculateCalories(name, duration);
    if (!name || !duration) {
      return res.status(400).json({ error: 'Exercise name and duration are required.' });
    }
    const exercise = new Exercise({ name, duration, calories });
    const createdExercise=await  exercise.save();
    if(createdExercise)
    res.status(201).json({createdExercise});
    else
    res.status(400).json({message:"Exercise not added"})
    } catch (err) {
      
      res.status(500).json({ error: 'Error adding exercise.' });
    }
  }

  const deleteExercises=async (req, res) => {
    try {
    const exerciseId = req.params.exerciseId;
      const deletedExercise = await Exercise.findByIdAndRemove(exerciseId);
      if (!deletedExercise) {
        return res.status(404).json({ error: 'Exercise not found.' });
      }
  
      res.status(204).json({ message: "Exercise Deleted" });
    } catch (err) {
      res.status(500).json({ error: 'Error deleting exercise.' });
    }
  }

  
export  {getExercises,postExercises,deleteExercises};