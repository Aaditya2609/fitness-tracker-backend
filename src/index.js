import express,{urlencoded} from 'express';
import {router as exerciseRouter} from "./routers/exercise.router"
import {router as foodRouter} from "./routers/food.router"
import {router as goalsRouter} from "./routers/goals.router"

import cors from "cors";
import * as dotenv from "dotenv";
import { initializeDatabase } from './db/db.connection';

const app = express();
const port=process.env.port||3000;

dotenv.config();
initializeDatabase();

app.use("/api/exercises",exerciseRouter);
app.use("/api/food",foodRouter);
app.use("/api/goal",goalsRouter);

app.use(urlencoded({extended:true}));
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


app.listen(port, () =>
  console.log('Example app listening on port', port),
);