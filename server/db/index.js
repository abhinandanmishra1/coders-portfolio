const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.MONGODB_URI;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'portfolioDb',
})
  .then(() => console.log('connected'))
  .catch(e => console.log(e));

const db = mongoose.connection

module.exports = db
