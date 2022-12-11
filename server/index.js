const express = require('express');
const hrRoutes = require('./routes/hackerrank');
const lcRoutes = require('./routes/leetcode');
const cfRoutes = require('./routes/codeforces');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/hackerrank', hrRoutes);
app.use('/leetcode', lcRoutes);
app.use('/codeforces', cfRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
