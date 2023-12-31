import express from "express";
import { config } from "dotenv";
import userRouter from "./router/user.js";
import cookieParser from "cookie-parser";

config({ path: "./config.env" });

export const app = express();

//middelware
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("Working...");
});
