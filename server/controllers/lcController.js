const asyncHandler = require("express-async-handler");
const request = require("postman-request");
const { lcOptions } = require("../helpers");

const getLanguagesCount = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("languageStats", username);
  request(
    options,
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
          response,
        });
        return;
      }
      const result = JSON.parse(body);
      if (result.errors) {
        res.status(404).send({
            success: false,
            error: result.errors,
          });
      }
      const json = result.data;
      res.status(statusCode).send({
        success: true,
        json,
      });
    }
  );
});

const getTagProblemCounts = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("tagProblemCounts", username);
  request(
    options,
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
          response,
        });
        return;
      }
      const result = JSON.parse(body);
      if (result.errors) {
        res.status(404).send({
            success: false,
            error: result.errors,
          });
      }
      const json = result.data;
      res.status(statusCode).send({
        success: true,
        json
      });
    }
  );
});

const getUserContestRatingInfo = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("userContestRatingInfo", username);
  request(
    options,
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
          response,
        });
        return;
      }
      const result = JSON.parse(body);
      if (result.errors) {
        res.status(404).send({
            success: false,
            error: result.errors,
          });
      }
      const json = result.data;
      res.status(statusCode).send({
        success: true,
        json
      });
    }
  );
});

const getUserProblemsSolvedInfo = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("userProblemsSolvedInfo", username);
  request(
    options,
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
          response,
        });
        return;
      }

      const result = JSON.parse(body);
      if (result.errors) {
        res.status(404).send({
            success: false,
            error: result.errors,
          });
      }
      const json = result.data;
      res.status(statusCode).send({
        success: true,
        json
      });
    }
  );
});

const getUserBadgesInfo = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("userBadgesInfo", username);
  request(
    options,
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
          response,
        });
        return;
      }

      const result = JSON.parse(body);
      if (result.errors) {
        res.status(404).send({
            success: false,
            error: result.errors,
          });
      }
      const json = result.data;
      res.status(statusCode).send({
        success: true,
        json
      });
    }
  );
});

const getUserRecentAcSubmissions = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("userRecentAcSubmissions", username, 10);
  request(
    options,
    function (error, response, body) {
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        res.status(statusCode).send({
          success: false,
          error,
          response,
        });
        return;
      }

      const result = JSON.parse(body);
      if (result.errors) {
        res.status(404).send({
            success: false,
            error: result.errors,
          });
      }
      const json = result.data;
      res.status(statusCode).send({
        success: true,
        json
      });
    }
  );
});

module.exports = {
  getLanguagesCount,
  getTagProblemCounts,
  getUserContestRatingInfo,
  getUserProblemsSolvedInfo,
  getUserBadgesInfo,
  getUserRecentAcSubmissions,
};
