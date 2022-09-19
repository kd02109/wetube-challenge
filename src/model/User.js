import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, max: 20, min: 2 },
  username: {
    type: String,
    required: true,
    trim: true,
    max: 20,
    min: 2,
    unique: true,
  },
  email: { type: String, required: true, trim: true, unique: true },
  avatarUrl: String,
  password: { type: String, required: true },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);

export default User;
