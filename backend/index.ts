import express from "express";
import { PORT, MONGODB_URL } from "./utils/envConfig";
import mongoose from "mongoose";
import router from "./routes/mzRoutes";

mongoose
  .connect(MONGODB_URL!)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
  console.error("Error connecting to MongoDB:", error.message)
);

const app = express();
app.use(router)


app.listen(PORT, () => console.log(`port ${PORT} started`));
