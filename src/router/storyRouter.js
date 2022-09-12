import express from "express";
import {
  getWatchStory,
  getEditStory,
  postEditStory,
  getDeleteStory,
  postDeleteStory,
} from "../controller/storyController";

const storyRouter = express.Router();
storyRouter.get("/:id([0-9a-g]{24})", getWatchStory);
storyRouter
  .route("/:id([0-9a-g]{24})/edit")
  .get(getEditStory)
  .post(postEditStory);
storyRouter
  .route("/:id([0-9a-g]{24})/delete")
  .get(getDeleteStory)
  .post(postDeleteStory);

export default storyRouter;
