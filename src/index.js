import express,{urlencoded} from 'express';
import {router as exerciseRouter} from "./routers/exercise.router"
import {router as foodRouter} from "./routers/food.router"
import {router as goalsRouter} from "./routers/goals.router"

import cors from "cors";
import * as dotenv from "dotenv";
import { initializeDatabase } from './db/db.connection';
dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(urlencoded({ extended: true }));
app.use(cors({
  origin:"*"
}));
initializeDatabase();
const port=process.env.port||3000;

app.use("/api/exercises",exerciseRouter);
app.use("/api/food",foodRouter);
app.use("/api/goal",goalsRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


app.listen(port, () =>
  console.log('Example app listening on port', port),
);