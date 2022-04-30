const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mongooose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log(err);
  });

app.use("api/user", userRoute);

app.listen(process.env.APP_PORT || 3000, () => {
  console.log("Server port 3000");
});
