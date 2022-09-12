import Movie from "../model/Movie";

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

export const getLogin = (req, res) => {
  return res.render("user/login", { pageTitle: "LOGIN" });
};
export const getJoin = (req, res) => {
  return res.render("user/join", { pageTitle: "JOIN" });
};
