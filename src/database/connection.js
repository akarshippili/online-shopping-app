import mongoose from "mongoose";
import config from "../config/index.js";

export default async () => {
  try {
    await mongoose.connect(config.dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection successful")
  } catch (error) {
    console.log("Error -> ", error);
  }
};
