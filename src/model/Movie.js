import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  summary: { type: String, required: true, trim: true },
  year: { type: Number, required: true },
  rating: { type: Number, required: true },
  genres: [{ type: String, required: true }],
});
// findByID와 같은 function을 만드는 방법!
moviesSchema.static("changeGenres", function (genres) {
  return genres
    .split(",")
    .map((genre) => (genre.startsWith("#") ? genre : `#${genre}`));
});

const movieModel = mongoose.model("Movie", moviesSchema);
export default movieModel;
