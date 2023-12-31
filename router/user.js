import express from "express";
import { loginUser, myProfile, registerUser } from "../controller/user.js";

const router = express.Router();

router.post("/add", registerUser);

router.post("/login", loginUser);

router.get("/me", myProfile);

export default router;
