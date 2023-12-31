import Collections from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/utility.js";

export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  let user = await Collections.findOne({ email });
  if (user)
    return res
      .status(404)
      .json({ success: false, message: "user already exist" });

  const hashPassword = await bcrypt.hash(password, 10);

  user = await Collections.create({ name, email, password: hashPassword });

  sendCookie(res, user, 201, "user created...");
};
