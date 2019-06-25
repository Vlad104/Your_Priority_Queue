const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const config = require("./config/config");
app.use(morgan("combined"));
app.use(bodyParser.json());

let dbMock = {
  'today': [
    {
      id: 0,
      text: 'Поесть дошик',
    },
    {
      id: 1,
      text: 'Попить пива',
    },
    {
      id: 2,
      text: 'Поесть дошик',
    },
    {
      id: 3,
      text: 'Попить пива',
    },
    {
      id: 4,
      text: 'Поесть дошик',
    },
  ],
  'tomorrow': [
    {
      id: 0,
      text: 'Поесть дошик',
    },
    {
      id: 1,
      text: 'Попить пива',
    },
  ],
  'soon': [
    {
      id: 0,
      text: 'Поесть дошик',
    },
    {
      id: 1,
      text: 'Попить пива',
    },
  ],
  'notsoon': [
    {
      id: 0,
      text: 'Поесть дошик',
    },
    {
      id: 1,
      text: 'Попить пива',
    },
  ],
  'ideas': [
    {
      id: 0,
      text: 'Поесть дошик',
    },
    {
      id: 1,
      text: 'Попить пива',
    },
  ],
}

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
  optionsSuccessStatus: 200,
}

app.options('*', cors(corsOptions));

app.get("/tasks/:slug", cors(corsOptions), (req, res, next) => {
  const { slug } = req.params;
  const resp = dbMock[slug];
  res.send(resp);
});

app.post("/tasks/:slug", cors(corsOptions), (req, res, next) => {
  const { slug } = req.params;
  const { task } = req.body;
  dbMock[slug].push(task);
  const resp = dbMock[slug];
  res.send(resp);
});

app.delete("/tasks/:slug/:id", cors(corsOptions), (req, res, next) => {
  const { slug, id } = req.params;
  dbMock[slug].splice(id, 1);
  console.log(slug, id);
  const resp = dbMock[slug];
  res.send(resp);
});

// app.get("/posts", cors(corsOptions), (req, res, next) => {
//   res.send([
//     {
//       title: "Hello World!",
//       description: "Hi there! How are you?"
//     }
//   ]);
// });

app.listen(process.env.PORT || config.port, () =>
  console.log(`Server start on port ${config.port} ...`)
);
