import express from "express";
import {
  getHome,
  getNew,
  postNew,
  getLogin,
  postLogin,
  getJoin,
  postJoin,
  getTrending,
  getSearch,
  getLogout,
} from "../controller/mainController.js";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.route("/new").get(getNew).post(postNew);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.get("/trending", getTrending);
globalRouter.get("/search", getSearch);
globalRouter.get("/logout", getLogout);

export default globalRouter;
