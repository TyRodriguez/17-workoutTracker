const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

//middelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, '/public')));


//routes
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

//db connection
mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workoutDb',
    { useNewUrlParser: true },
    () => {
      console.log('Connected to DB');
    }
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log(`listening on PORT ${PORT}`);
    })
  );
