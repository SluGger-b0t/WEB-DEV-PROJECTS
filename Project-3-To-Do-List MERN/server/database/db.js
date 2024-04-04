import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const Connection = () => {
  const MONGOODB_URI = process.env.DB_USER
   mongoose.connect(MONGOODB_URI, {
    useNewUrlParser: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("database connected");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("error while connecting ", error.message);
  });
};
export default Connection;
