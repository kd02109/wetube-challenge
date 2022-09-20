import express from "express";
import {
  getWatchStory,
  getEditStory,
  postEditStory,
  getDeleteStory,
  postDeleteStory,
} from "../controller/storyController";
import { protectLogin } from "../middleware/middleware";

const storyRouter = express.Router();
storyRouter.get("/:id([0-9a-g]{24})", getWatchStory);
storyRouter
  .route("/:id([0-9a-g]{24})/edit")
  .all(protectLogin)
  .get(getEditStory)
  .post(postEditStory);
storyRouter
  .route("/:id([0-9a-g]{24})/delete")
  .all(protectLogin)
  .get(getDeleteStory)
  .post(postDeleteStory);

export default storyRouter;
