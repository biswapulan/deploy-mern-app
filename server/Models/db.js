const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONN;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB Connected to Server ...");
  })
  .catch((err) => {
    console.log("MongoDB Connection error", err);
  });
