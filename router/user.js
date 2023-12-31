import express from "express";
import { registerUser } from "../controller/user.js";

const router = express.Router();

router.post("/add", registerUser);

export default router;
