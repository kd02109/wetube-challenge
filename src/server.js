import express from "express";
import morgan from "morgan";
import {
  protectorMiddelware,
  securityLogger,
  timeLogger,
  urlLogger,
} from "./middleware/middleware.js";
import movieRouter from "./router/movieRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(logger);
app.use(urlLogger, timeLogger, securityLogger, protectorMiddelware);
app.use("/", movieRouter);

const handleListening = () => {
  console.log("😁 I start the Server");
};

app.listen(PORT, handleListening);
