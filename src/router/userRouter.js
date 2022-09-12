import express from "express";
import {
  getUser,
  getProfile,
  getEditProfile,
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.get("/:id([0-9a-g]{24})", getProfile);
userRouter.get("/:id([0-9a-g]{24})/edit-profile", getEditProfile);

export default userRouter;
