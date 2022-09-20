import Movie from "../model/Movie";
import User from "../model/User";
import bcrypt from "bcrypt";

export const getHome = async (req, res) => {
  try {
    const movies = await Movie.find({});
    return res.render("home", { pageTitle: "Home", movies });
  } catch (error) {
    return res.status(404).render("/", { pageTitle: "NOT Found" });
  }
};

export const getSearch = async (req, res) => {
  const { keyword, genres } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Movie.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
      genres: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
  if (genres) {
    videos = await Movie.find({
      genres: {
        $regex: new RegExp(genres, "i"),
      },
    });
  }
  return res.render("story/search", { pageTitle: "SEARCH MOVIE", videos });
};

export const getTrending = (req, res) => {
  return res.render("story/trending", { pageTitle: "TRENDING" });
};

export const getNew = (req, res) => {
  return res.render("story/new-stories", { pageTitle: "NEW STORY" });
};
export const postNew = async (req, res) => {
  const { title, rating, hashtag, description, year } = req.body;
  const genres = Movie.changeGenres(hashtag);
  try {
    await Movie.create({
      title,
      rating,
      summary: description,
      genres,
      year,
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("/story/new-stories", {
      pageTitle: "NEW STORY",
      errorMessage: error._message,
    });
  }
};

//로그인!

export const getLogin = (req, res) => {
  return res.render("user/login", { pageTitle: "LOGIN" });
};
export const postLogin = async (req, res) => {
  const { id, password } = req.body;
  const exists = await User.exists({ username: id });
  //check id
  if (!exists) {
    return res.status(404).render("user/login", {
      pageTitle: "Login",
      errorMessage: "Doesn't Find this Id",
    });
  }

  //check password
  const user = await User.findOne({ username: id });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("user/login", {
      pageTitle: "Login",
      errorMessage: "Wrong password!",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

//회원가입!

export const getJoin = (req, res) => {
  return res.render("user/join", { pageTitle: "JOIN" });
};

export const postJoin = async (req, res) => {
  const { name, email, id, password, passwordCheck } = req.body;
  const exists = await User.exists({ $or: [{ username: id }, { email }] });
  if (exists) {
    return res.status(404).render("user/join", {
      pageTitle: "JOIN",
      errorMessage: "the ID or email are exist",
    });
  }
  if (password !== passwordCheck) {
    return res.status(400).render("user/join", {
      pageTitle: "JOIN",
      errorMessage: "password does'n match with check",
    });
  }

  try {
    await User.create({
      name,
      username: id,
      email,
      password,
    });
    return res.redirect("/login");
  } catch (error) {
    console.log(error);
    return res.status(400).render("user/join", {
      pageTitle: "JOIN",
      errorMessage: error._message,
    });
  }
};

export const getLogout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
