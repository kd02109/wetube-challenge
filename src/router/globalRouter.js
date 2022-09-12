import express from "express";
import {
  getHome,
  getNew,
  postNew,
  getLogin,
  getJoin,
  getTrending,
  getSearch,
} from "../controller/mainController.js";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.route("/new").get(getNew).post(postNew);
globalRouter.get("/login", getLogin);
globalRouter.get("/join", getJoin);
globalRouter.get("/trending", getTrending);
globalRouter.get("/search", getSearch);

export default globalRouter;
