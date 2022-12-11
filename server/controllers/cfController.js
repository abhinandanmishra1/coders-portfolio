const asyncHandler = require("express-async-handler");
const request = require("postman-request");

const getCfProfile = asyncHandler(async (req, res) => {
  const { username } = req.query;
  request(
    {
      url: `https://codeforces.com/api/user.info?handles=${username}`,
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

      const result = JSON.parse(body);

      if (result.status !=='OK') {
        res.status(404).send({
            success: false,
            error: "User not found",
        });
        return;
      }

      const [json] = result.result;
      res.status(statusCode).send({
        success: true,
        json,
      });
    }
  );
});

const getCfContestRatings = asyncHandler(async (req, res) => {
  const { username } = req.query;
  request(
    {
      url: `https://codeforces.com/api/user.rating?handle=${username}`,
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

      const result = JSON.parse(body);

      if (result.status !=='OK') {
        res.status(404).send({
            success: false,
            error: "User not found",
        });
        return;
      }

      const json = result.result;
      res.status(statusCode).send({
        success: true,
        json,
      });
    }
  );
});

const getUserStatus = asyncHandler(async (req, res) => {
  const { username } = req.query;
  request(
    {
      url: `https://codeforces.com/api/user.status?handle=${username}`,
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

      const result = JSON.parse(body);

      if (result.status !=='OK') {
        res.status(404).send({
            success: false,
            error: "User not found",
        });
        return;
      }

      const json = result.result
                  .map((data) => {
                    const { id, contestId, problem, creationTimeSeconds, verdict } = data;
                    return {
                      id,
                      contestId,
                      problem,
                      creationTimeSeconds,
                      verdict
                    }
                  });
      res.status(statusCode).send({
        success: true,
        json,
      });
    }
  );
});


module.exports = {
    getCfProfile,
    getCfContestRatings,
    getUserStatus,
};
