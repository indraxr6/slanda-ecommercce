const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mongooose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/user");
const { urlencoded } = require("express");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.APP_PORT || 3080, () => {
  console.log("Server port 3080");
});
