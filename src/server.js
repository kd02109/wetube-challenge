import "./db";

import express from "express";
import morgan from "morgan";

import globalRouter from "./router/globalRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use("/texts", express.static("texts"));

app.use("/", globalRouter);

const handleListening = () => {
  console.log("😁 I start the Server");
};

app.listen(PORT, handleListening);
