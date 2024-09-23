const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); //allows req form another port , here the client port
require("dotenv").config();
require("./Models/db");
const authRouter = require("./Routes/authRouter");
const productRouter = require("./Routes/productRouter");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/hello", (req, res) => {
  res.send("mummy kaisi hain😉");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}...`);
});
