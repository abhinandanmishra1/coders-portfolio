const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.h12imup.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'portfolioDb',
    })
    .then(()=>console.log('connected'))
    .catch(e=>console.log(e));

const db = mongoose.connection

module.exports = db
