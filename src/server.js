import express from "express";
import { home, about, contact, login } from "./controller/mainController.js";
import {
  protectorMiddelware,
  securityLogger,
  timeLogger,
  urlLogger,
} from "./middleware/middleware.js";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(urlLogger, timeLogger, securityLogger, protectorMiddelware);

app.get("/", home);
app.get("/about", about);
app.get("/contact", contact);
app.get("/login", login);

const handleListening = () => {
  console.log("😁 I start the Server");
};

app.listen(PORT, handleListening);
