import mongoose from "mongoose";

const pageImageSchema = new mongoose.Schema({
  page: Number,
  img: [String],
});

const userMagazineSchema = new mongoose.Schema({
  userId: Number,
  images: [pageImageSchema]
});

export const UserMagazineImg = mongoose.model("UserMagazineImg", userMagazineSchema);
