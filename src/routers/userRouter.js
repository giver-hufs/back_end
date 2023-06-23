import {
  handleLogin,
  handleSignup,
  editUserInfo,
} from "../controllers/userController";

const express = require("express");
const userRouter = express.Router();

userRouter.put("/edit", editUserInfo);
userRouter.post("/signup", handleSignup);
userRouter.post("/login", handleLogin);
export default userRouter;
