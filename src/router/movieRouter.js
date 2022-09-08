import express from "express";
import {
  home,
  movieDetail,
  filterMovie,
  getAdd,
  postAdd,
} from "../controller/movieController";

const movieRouter = express.Router();
movieRouter.get("/", home);
movieRouter.get("/:id", movieDetail);
movieRouter.get("/filter", filterMovie);
movieRouter.route("/add").get(getAdd).post(postAdd);
export default movieRouter;
