const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const config = require("./config/config");
app.use(morgan("combined"));
app.use(bodyParser.json());

const whiteList = ['http://localhost:8080'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Origin',
  credentials: true,
}

app.get("/posts", cors(corsOptions), (req, res, next) => {
  res.send([
    {
      title: "Hello World!",
      description: "Hi there! How are you?"
    }
  ]);
});

app.listen(process.env.PORT || config.port, () =>
  console.log(`Server start on port ${config.port} ...`)
);
