import express from "express";
import {
  getWatchStory,
  getEditStory,
  getDeleteStory,
} from "../controller/storyController";

const storyRouter = express.Router();
storyRouter.get("/:id", getWatchStory);
storyRouter.get("/:id/edit", getEditStory);
storyRouter.get("/:id/delete", getDeleteStory);

export default storyRouter;
