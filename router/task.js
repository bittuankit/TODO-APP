import express from "express";
import {
  createTask,
  deleteTask,
  myTask,
  updateTask,
} from "../controller/task.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, createTask);

router.get("/mytask", isAuthenticated, myTask);

router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;
