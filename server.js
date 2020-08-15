const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const User = require("./models");
const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require('./routes/htmlRoutes'));
app.use(require('./routes/apiRoutes'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// mongoose
//   .connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/workoutDb',
//     { useNewUrlParser: true },
//     () => {
//       console.log('Connected to Mongo');
//     }
//   )
//   .then(() =>
//     app.listen(PORT, () => {
//       console.log(`listening on PORT ${PORT}`);
//     })
//   );