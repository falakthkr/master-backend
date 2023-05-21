const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cookieParser());
var corsOptions = {
  origin:["http://localhost:3000/", "https://estic-dev.netlify.app/"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors());

const userRoute = require("./routes/users");
const propertiesRoute = require("./routes/estic/property");

app.use("/users", userRoute);
app.use("/estic/properties", propertiesRoute);

mongoose.connect(
  process.env.ATLAS_URI.toString(),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
      console.log("Error connecting the database");
    } else {
      console.log("Database successfully connected");
    }
  }
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The server is up and running on ${port}!`);
});
