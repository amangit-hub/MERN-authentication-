import express from "express";
import { connectMongoDb } from "./db/connectMongoDb.js";
import authRoute from "./route/authRoute.js";
const app = express();

app.get("/", (req, res) => {
  res.send("hello world ");
});
app.use("/api/auth", authRoute);

// to check programming still running
app.listen(3000, () => {
  connectMongoDb();
  console.log("server is running on  port 3000 ...");
});
