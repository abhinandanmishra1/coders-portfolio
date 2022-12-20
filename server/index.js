const express = require('express');
const dotenv = require('dotenv');
const hrRoutes = require('./routes/hackerrank');
const lcRoutes = require('./routes/leetcode');
const cfRoutes = require('./routes/codeforces');
const ghRoutes = require('./routes/github');
const ccRoutes = require('./routes/codechef');

const app = express();
dotenv.config();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/hackerrank', hrRoutes);
app.use('/leetcode', lcRoutes);
app.use('/codeforces', cfRoutes);
app.use('/github', ghRoutes);
app.use('/codechef', ccRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
