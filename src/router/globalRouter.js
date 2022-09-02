import express from "express";
import {
  getHome,
  getNew,
  getLogin,
  getJoin,
  getTrending,
} from "../controller/mainController.js";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.get("/new", getNew);
globalRouter.get("/login", getLogin);
globalRouter.get("/join", getJoin);
globalRouter.get("/trending", getTrending);

export default globalRouter;
