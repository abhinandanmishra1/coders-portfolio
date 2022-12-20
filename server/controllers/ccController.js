const asyncHandler = require("express-async-handler");
const request = require("postman-request");

const getCcProfile = asyncHandler(async (req, res) => {
  const { username } = req.query;
  request(
    {
      url: `https://www.codechef.com/users/${username}`,
      headers: {
        "User-Agent": "postman-request",
      },
    },
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 5000;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
        });
        return;
      }
      
      res.status(statusCode).send({
        success: true,
        json: body,
      });
    }
  );
});

module.exports = {
    getCcProfile,
};
