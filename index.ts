import cors from "cors";
import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { userRouter } from "./src/router/userRoute";
dotenv.config();
const app = express();
const port = process.env.PORT || 3333;
const corsOptions: Object = {
  origin: [process.env.ACCESS_URL],
};
app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(process.env.CONNECT_STRING as string)
  .then(() => {})
  .catch((err) => {
    throw err;
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.use("/v0/", userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
