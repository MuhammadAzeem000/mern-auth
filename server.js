import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./model/connectionDB.js";

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Environment Varaibles
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
const ENVIRONMENT = process.env.ENVIRONMENT;

//Connect to MongoDB
connectDB();

//Server Call
app.listen(PORT, () => {
  console.log(
    `Server is Running on PORT:${PORT} in ${ENVIRONMENT} Environment`
  );
});
