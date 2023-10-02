import express from 'express';
import { deleteGoals, getGoals, postGoals } from '../controllers/goals.controller';

const router=express.Router()
router.route("/").get(getGoals);
router.route("/").post(postGoals);
router.route("/:goalId").delete(deleteGoals); 


export {router};