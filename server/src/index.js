const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config/config");
const mongoose = require('mongoose');

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors(config.corsOptions));
app.use(require('./handlers/tasks'));

app.options('*', cors(config.corsOptions));

// app.get("/posts", cors(corsOptions), (req, res, next) => {
//   res.send([
//     {
//       title: "Hello World!",
//       description: "Hi there! How are you?"
//     }
//   ]);
// });


mongoose.Promise = global.Promise; // зачем?
mongoose.connect(config.dbURL, config.dbOptions);
mongoose.connection
  .once('open', () => {
    console.log('Mongo DB connected');
    app.listen(process.env.PORT || config.port, () =>
      console.log(`Server start on port ${config.port} ...`)
    );
  })
  .on('error', error => console.warn(error));

// app.listen(process.env.PORT || config.port, () =>
//   console.log(`Server start on port ${config.port} ...`)
// );
