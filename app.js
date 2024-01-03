import express from "express";
import { config } from "dotenv";
import userRouter from "./router/user.js";
import taskRouter from "./router/task.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors";

config({ path: "./config.env" });

export const app = express();

//middelware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Working...");
});

app.use(errorMiddleware);
