import express from "express";
import { loginUser, myProfile, registerUser } from "../controller/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/add", registerUser);

router.post("/login", loginUser);

router.get("/me", isAuthenticated, myProfile);

export default router;
