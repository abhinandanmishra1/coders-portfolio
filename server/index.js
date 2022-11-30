const express = require('express');
const request = require('postman-request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/hackerrank/profile', (req, res) => {
  const {username} = req.query;
  console.log(req);
  request(
    { 
      url: `https://www.hackerrank.com/rest/contests/master/hackers/${username}/profile`,
      headers: {
        'User-Agent': 'postman-request'
      }
    },
    function (error, response, body) {
      const statusCode = response && response.statusCode || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error
        })
      }

      console.log('body:', JSON.parse(body)); 
      const result =  JSON.parse(body);
      res.send({
        success: true,
        json: result
      })
    }
  )
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
