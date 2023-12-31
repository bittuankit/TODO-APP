import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "tododata" })
    .then(() => {
      console.log("Datebase is connected...");
    })
    .catch((e) => {
      console.log(e);
    });
};
