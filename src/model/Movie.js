import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  summary: { type: String, required: true, trim: true },
  year: { type: Number, required: true },
  rating: { type: Number, required: true },
  genres: [{ type: String, required: true }],
});
const movieModel = mongoose.model("Movie", moviesSchema);
export default movieModel;
