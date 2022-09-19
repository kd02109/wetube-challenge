import "./db";
import "./model/Movie.js";
import express from "express";
import morgan from "morgan";
import session from "express-session";
import {
  protectorMiddelware,
  securityLogger,
  timeLogger,
  urlLogger,
  localMiddleware,
} from "./middleware/middleware.js";

import globalRouter from "./router/globalRouter";
import storyRouter from "./router/storyRouter";
import userRouter from "./router/userRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(urlLogger, timeLogger, securityLogger, protectorMiddelware);
app.use(
  session({
    secret: "Hello",
    resave: true,
    saveUnintialized: true,
  })
);
app.use(localMiddleware);
app.use("/users", userRouter);
app.use("/stories", storyRouter);
app.use("/", globalRouter);

const handleListening = () => {
  console.log("😁 I start the Server");
};

app.listen(PORT, handleListening);
