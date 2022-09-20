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
import { protectLogin, protectNotLogin } from "../middleware/middleware.js";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.route("/new").all(protectNotLogin).get(getNew).post(postNew);
globalRouter.route("/login").all(protectNotLogin).get(getLogin).post(postLogin);
globalRouter.route("/join").all(protectNotLogin).get(getJoin).post(postJoin);
globalRouter.get("/trending", getTrending);
globalRouter.get("/search", getSearch);
globalRouter.all(protectLogin).get("/logout", getLogout);

export default globalRouter;
