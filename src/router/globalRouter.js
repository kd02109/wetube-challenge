import express from "express";
import uploadText from "../middleware/middleware";
import { getHome, postHome, getRead, postRead } from "../controller/controller";
const globalRouter = express.Router();

globalRouter.route("/").get(getHome).post(uploadText.single("text"), postHome);
globalRouter.route("/read/:id").get(getRead);

export default globalRouter;
