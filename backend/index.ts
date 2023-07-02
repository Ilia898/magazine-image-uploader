import express from "express";
import { PORT, MONGODB_URL } from "./utils/envConfig";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(MONGODB_URL!)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
  console.error("Error connecting to MongoDB:", error.message)
);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`port ${PORT} started`));
