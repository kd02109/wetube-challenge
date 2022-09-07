import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  return res.render("index", { pageTitle: "MOVIES!", movies });
};
export const movieDetail = (req, res) => {
  const id = req.params.id;
  const movie = getMovieById(id);
  const title = movie.title;
  console.log(movie);
  return res.render("watch", { pageTitle: title, movie });
};
export const filterMovie = (req, res) => {
  console.log(req.query);
  const { year, rate } = req.query;
  console.log(year, typeof year);
  console.log(rate, typeof rate);
  let searchMovie;
  let pageTitle;

  if (year !== "" && rate === "") {
    pageTitle = `Searching by year: ${year}`;
    searchMovie = getMovieByMinimumYear(year);
  } else if (year === "" && rate !== "") {
    pageTitle = `Searching by rate: ${rate}`;
    searchMovie = getMovieByMinimumRating(rate);
  } else if (year !== "" && rate !== "") {
    pageTitle = `Searching by rate: ${rate} & year: ${year}`;
    searchMovie = getMovieByMinimumYear(year);
    searchMovie = getMovieByMinimumRating(rate);
  }
  if (searchMovie.length >= 1) {
    return res.render("filter", { pageTitle, searchMovie });
  } else {
    return res.render("filter", { pageTitle: "Nothing Else" });
  }
};
