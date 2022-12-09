const asyncHandler = require("express-async-handler");
const request = require("postman-request");
const { lcOptions } = require("../helpers");

const getUserInfo = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("userInfo", username);
  request(options, function (error, response, body) {
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
      return;
    }
    const json = result.data;
    res.status(statusCode).send({
      success: true,
      json,
    });
  });
});

const getLanguagesCount = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("languageStats", username);
  request(options, function (error, response, body) {
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
      return;
    }
    const json = result.data;
    res.status(statusCode).send({
      success: true,
      json,
    });
  });
});

const getTagProblemCounts = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("tagProblemCounts", username);
  request(options, function (error, response, body) {
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
      return;
    }
    const json = result.data;
    res.status(statusCode).send({
      success: true,
      json,
    });
  });
});

const getUserContestRatingInfo = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("userContestRatingInfo", username);
  request(options, function (error, response, body) {
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
      return;
    }
    const json = result.data;
    res.status(statusCode).send({
      success: true,
      json,
    });
  });
});

const getUserContestRatingHistogram = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("userContestRatingHistogram", username);
  request(options, function (error, response, body) {
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
      return;
    }
    const json = result.data;
    res.status(statusCode).send({
      success: true,
      json,
    });
  });
});

const getUserProblemsSolvedInfo = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("userProblemsSolvedInfo", username);
  request(options, function (error, response, body) {
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
      return;
    }
    const json = result.data;
    res.status(statusCode).send({
      success: true,
      json,
    });
  });
});

const getUserBadgesInfo = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("userBadgesInfo", username);
  request(options, function (error, response, body) {
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
      return;
    }
    const json = result.data;
    res.status(statusCode).send({
      success: true,
      json,
    });
  });
});

const getUserRecentAcSubmissions = asyncHandler(async (req, res) => {
  const { username } = req.query;
  const altOptions = {
    limit : 20
  };
  var options = lcOptions("userRecentAcSubmissions", username, altOptions);
  request(options, function (error, response, body) {
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
      return;
    }
    const json = result.data;
    res.status(statusCode).send({
      success: true,
      json,
    });
  });
});

const getUserDiscussionSolutions = asyncHandler(async (req, res) => {
  const { username, orderBy } = req.query;
  const altOptions = {
    first: 20,
    orderBy,
    skip: 0,
  };
  var options = lcOptions("userDiscussionSolutions", username, altOptions);
  request(options, function (error, response, body) {
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
      return;
    }
    const json = result.data;
    res.status(statusCode).send({
      success: true,
      json,
    });
  });
});

const getUserProfileCalendar = asyncHandler(async (req, res) => {
  const { username } = req.query;
  var options = lcOptions("userProfileCalendar", username);
  request(options, function (error, response, body) {
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
      return;
    }
    const json = result.data;
    res.status(statusCode).send({
      success: true,
      json,
    });
  });
});

module.exports = {
  getUserInfo,
  getLanguagesCount,
  getTagProblemCounts,
  getUserContestRatingInfo,
  getUserContestRatingHistogram,
  getUserProblemsSolvedInfo,
  getUserBadgesInfo,
  getUserRecentAcSubmissions,
  getUserDiscussionSolutions,
  getUserProfileCalendar,
};
