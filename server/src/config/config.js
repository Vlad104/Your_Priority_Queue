
const whiteList = ['http://localhost:8080'];

module.exports = {
  port: 8081,
  dbURL: 'mongodb://localhost:27017',
  // dbURL: 'mongodb://localhost:27017',
  // dbURL: 'mongodb://localhost/articles',
  dbOptions: { useMongoClient: true },
  corsOptions: {
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
};
