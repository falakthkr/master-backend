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
  origin: ["http://localhost:3000", "https://estic-dev.netlify.app"],
};

app.use(cors(corsOptions));

const userRoute = require("./routes/users");
const propertiesRoute = require("./routes/estic/property");
const blogsRoute = require("./routes/blogs/posts");
const authRoute = require("./routes/auth/userAuth");

app.use("/users", userRoute);
app.use("/estic/properties", propertiesRoute);
app.use("/blogs", blogsRoute);
app.use("/auth", authRoute);

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
