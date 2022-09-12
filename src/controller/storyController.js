import Movie from "../model/Movie";

export const getWatchStory = async (req, res) => {
  const id = req.params.id;
  const movie = await Movie.findById(id);
  if (!movie || !id) {
    return res.status(404).render("/", { pageTitle: "NOT FOUND" });
  }
  return res.render("story/watch", { pageTitle: "WATCH", movie });
};

export const getEditStory = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).render("/", { pageTitle: "Video not found!" });
  }
  return res.render("story/edit-stories", { pageTitle: "EDIT STORY", movie });
};

export const postEditStory = async (req, res) => {
  const { id } = req.params;
  const { title, rating, hashtag, description, year } = req.body;

  const genres = Movie.changeGenres(hashtag);

  await Movie.findByIdAndUpdate(id, {
    title,
    rating,
    genres,
    summary: description,
    year,
  });
  return res.redirect(`/stories/${id}`);
};

export const getDeleteStory = (req, res) => {
  return res.render("story/delete-stories", { pageTitle: "DELETE STORY" });
};

export const postDeleteStory = async (req, res) => {
  const id = req.params.id;
  await Movie.findByIdAndDelete(id);
  return res.redirect("/");
};
