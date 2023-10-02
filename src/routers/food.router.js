import express from 'express';
import { deleteFood, getFood, postFood } from '../controllers/food.controller';

const router=express.Router()
router.route("/").get(getFood);
router.route("/").post(postFood);
router.route("/:foodId").delete(deleteFood); 


export {router};