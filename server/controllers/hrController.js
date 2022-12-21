const asyncHandler = require("express-async-handler");
const request = require("postman-request");

const getHrProfile = asyncHandler(async (req, res) => {
  const { username } = req.query;
  request(
    {
      url: `https://www.hackerrank.com/rest/contests/master/hackers/${username}/profile`,
      headers: {
        "User-Agent": "postman-request",
      },
    },
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
        });
        return;
      }
      const result = JSON.parse(body);
      if (!result.model) {
        res.status(404).send({
          data: {
            success: false,
            error: "User not found",
          },
        });
        return;
      }
      res.status(statusCode).send({
        success: true,
        json: result,
      });
    }
  );
});

const getHrBadges = asyncHandler(async (req, res) => {
  const { username } = req.query;
  request(
    {
      url: `https://www.hackerrank.com/rest/hackers/${username}/badges`,
      headers: {
        "User-Agent": "postman-request",
      },
    },
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
        });
        return;
      }
      if (!body) {
        res.status(404).send({
          data: {
            success: false,
            error: "User not found",
          },
        });
        return;
      }
      const result = JSON.parse(body);
      if (!result.models) {
        res.status(404).send({
          data: {
            success: false,
            error: "User not found",
          },
        });
        return;
      }
      const json = result.models;
      res.status(statusCode).send({
        success: true,
        json
      });
    }
  );
});

const getCertificates = asyncHandler(async (req, res) => {
  const { username } = req.query;

  request(
    {
      url: `https://www.hackerrank.com/community/v1/test_results/hacker_certificate?username=${username}`,
      headers: {
        "User-Agent": "postman-request",
      },
    },
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
        });
        return;
      }
      
      const result = JSON.parse(body);

      if (result.data.length === 0) {
        res.status(404).send({
          data: {
            success: false,
            error: "Certificates are not available",
          },
        });
        return;
      }
      const json = result.data;
      res.status(statusCode).send({
        success: true,
        json,
      });
    }
  );
});

const getWorkExperiences = asyncHandler(async (req, res) => {
  const { username } = req.query;

  request(
    {
      url: `https://www.hackerrank.com/community/v1/hackers/${username}/hacker_companies`,
      headers: {
        "User-Agent": "postman-request",
      },
    },
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
        });
        return;
      }
      
      const result = JSON.parse(body);

      if (result.errors || result.data.length === 0){
        res.status(404).send({
          data: {
            success: false,
            error: "No experiences are available",
          },
        });
        return;
      }

      const json = result.data;
      res.status(statusCode).send({
        success: true,
        json,
      });
    }
  );
});

module.exports = {
  getHrProfile,
  getHrBadges,
  getCertificates,
  getWorkExperiences,
};
