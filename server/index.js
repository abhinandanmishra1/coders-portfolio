const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const { errorHandler } = require("./middleware/errorHandler");
const hrRoutes = require('./routes/hackerrank');
const lcRoutes = require('./routes/leetcode');
const cfRoutes = require('./routes/codeforces');
const ghRoutes = require('./routes/github');
const ccRoutes = require('./routes/codechef');
const userRoutes = require('./routes/user');

const app = express();
dotenv.config();
const server = require('http').Server(app);
app.use(errorHandler);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const db = require('./db');

const { routesData } = require('./routesJson');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req, res) => {
  res.send(routesData);
});

app.use('/hackerrank', hrRoutes);
app.use('/leetcode', lcRoutes);
app.use('/codeforces', cfRoutes);
app.use('/github', ghRoutes);
app.use('/codechef', ccRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
