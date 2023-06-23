import { handleLogin, handleSignup } from "../controllers/userController";

const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", handleSignup);
userRouter.post("/login", handleLogin);

export default userRouter;
