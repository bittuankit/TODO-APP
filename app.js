import express from "express";
import { config } from "dotenv";

config({ path: "./config.env" });

export const app = express();

app.get("/", (req, res) => {
  res.send("Working...");
});
