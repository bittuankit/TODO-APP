import express from "express";
import { config } from "dotenv";
import userRouter from "./router/user.js";

config({ path: "./config.env" });

export const app = express();

//middelware
app.use(express.json());
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("Working...");
});
