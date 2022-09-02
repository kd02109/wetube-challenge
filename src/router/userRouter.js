import express from "express";
import {
  getUser,
  getProfile,
  getEditProfile,
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.get("/:id", getProfile);
userRouter.get("/edit-profile", getEditProfile);

export default userRouter;
