
import { deleteExercises, getExercises, postExercises } from "../controllers/exercise.controller";
import express from 'express';

const router=express.Router()
router.route("/").get(getExercises);
router.route("/").post(postExercises);
router.route("/:exerciseId").delete(deleteExercises);


export {router};