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

		try {
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
		} catch (err) {
			res.status(statusCode).send({
				success: false,
				error: {
					message:
						"Leetcode is temporarily unavailable. Please, return in several minutes",
				},
			});
		}
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

		try {
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
		} catch (err) {
			res.status(statusCode).send({
				success: false,
				error: {
					message:
						"Leetcode is temporarily unavailable. Please, return in several minutes",
				},
			});
		}
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

		try {
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
		} catch (err) {
			res.status(statusCode).send({
				success: false,
				error: {
					message:
						"Leetcode is temporarily unavailable. Please, return in several minutes",
				},
			});
		}
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

		try {
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
		} catch (err) {
			res.status(statusCode).send({
				success: false,
				error: {
					message:
						"Leetcode is temporarily unavailable. Please, return in several minutes",
				},
			});
		}
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
		try {
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
		} catch (err) {
			res.status(statusCode).send({
				success: false,
				error: {
					message:
						"Leetcode is temporarily unavailable. Please, return in several minutes",
				},
			});
		}
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

		try {
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
		} catch (err) {
			res.status(statusCode).send({
				success: false,
				error: {
					message:
						"Leetcode is temporarily unavailable. Please, return in several minutes",
				},
			});
		}
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

		try {
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
		} catch (err) {
			res.status(statusCode).send({
				success: false,
				error: {
					message:
						"Leetcode is temporarily unavailable. Please, return in several minutes",
				},
			});
		}
	});
});

const getUserRecentAcSubmissions = asyncHandler(async (req, res) => {
	const { username } = req.query;
	const altOptions = {
		limit: 20,
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

		try {
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
		} catch (err) {
			res.status(statusCode).send({
				success: false,
				error: {
					message:
						"Leetcode is temporarily unavailable. Please, return in several minutes",
				},
			});
		}
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

		try {
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
		} catch (err) {
			res.status(statusCode).send({
				success: false,
				error: {
					message:
						"Leetcode is temporarily unavailable. Please, return in several minutes",
				},
			});
		}
	});
});

const getUserProfileCalendar = asyncHandler(async (req, res) => {
	const { username, year } = req.query;
	var options = lcOptions("userProfileCalendar", username, { year });
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

		try {
			const result = JSON.parse(body);

			if (result.errors) {
				res.status(404).send({
					success: false,catch (err) {
            res.status(statusCode).send({
              success: false,
              error: {
                message:
                  "Leetcode is temporarily unavailable. Please, return in several minutes",
              },
            });
          },
					error: result.errors,
				});
				return;
			}

			const json = result.data;
			res.status(statusCode).send({
				success: true,
				json,
			});
		} catch (err) {
			res.status(statusCode).send({
				success: false,
				error: {
					message:
						"Leetcode is temporarily unavailable. Please, return in several minutes",
				},
			});
		}
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
