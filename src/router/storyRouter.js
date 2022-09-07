import express from "express";
import {
  getWatchStory,
  getEditStory,
  getDeleteStory,
} from "../controller/storyController";

const storyRouter = express.Router();
storyRouter.get("/:id([0-9]{4})", getWatchStory);
storyRouter.get("/:id([0-9]{4})/edit", getEditStory);
storyRouter.get("/:id([0-9]{4})/delete", getDeleteStory);

export default storyRouter;
