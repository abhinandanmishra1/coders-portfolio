const asyncHandler = require("express-async-handler");
const request = require("postman-request");

const getGhProfile = asyncHandler(async (req, res) => {
	const { username } = req.query;
	request(
		{
			url: `https://api.github.com/users/${username}`,
			headers: {
				"User-Agent": "postman-request",
				Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			},
			OAUth: process.env.GITHUB_ACCESS_TOKEN,
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
			try {
				const result = JSON.parse(body);
				res.status(statusCode).send({
					success: true,
					json: result,
				});
			} catch (err) {
				res.status(statusCode).send({
					success: false,
					error: {
						message:
							"Github is temporarily unavailable. Please, return in several minutes",
					},
				});
			}
		}
	);
});

const getFollowers = asyncHandler(async (req, res) => {
	const { username } = req.query;
	request(
		{
			url: `https://api.github.com/users/${username}/followers`,
			headers: {
				"User-Agent": "postman-request",
				Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			},
			OAUth: process.env.GITHUB_ACCESS_TOKEN,
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

			try {
				const result = JSON.parse(body);
				res.status(statusCode).send({
					success: true,
					json: result,
				});
			} catch (err) {
				res.status(statusCode).send({
					success: false,
					error: {
						message:
							"Github is temporarily unavailable. Please, return in several minutes",
					},
				});
			}
		}
	);
});

const getFollowing = asyncHandler(async (req, res) => {
	const { username } = req.query;
	request(
		{
			url: `https://api.github.com/users/${username}/following`,
			headers: {
				"User-Agent": "postman-request",
				Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			},
			OAUth: process.env.GITHUB_ACCESS_TOKEN,
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

			try {
				const result = JSON.parse(body);
				res.status(statusCode).send({
					success: true,
					json: result,
				});
			} catch (err) {
				res.status(statusCode).send({
					success: false,
					error: {
						message:
							"Github is temporarily unavailable. Please, return in several minutes",
					},
				});
			}
		}
	);
});

const getOrgs = asyncHandler(async (req, res) => {
	const { username } = req.query;
	request(
		{
			url: `https://api.github.com/users/${username}/orgs`,
			headers: {
				"User-Agent": "postman-request",
				Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			},
			OAUth: process.env.GITHUB_ACCESS_TOKEN,
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

			try {
				const result = JSON.parse(body);
				res.status(statusCode).send({
					success: true,
					json: result,
				});
			} catch (err) {
				res.status(statusCode).send({
					success: false,
					error: {
						message:
							"Github is temporarily unavailable. Please, return in several minutes",
					},
				});
			}
		}
	);
});

const getRepos = asyncHandler(async (req, res) => {
	const { username } = req.query;
	request(
		{
			url: `https://api.github.com/users/${username}/repos`,
			headers: {
				"User-Agent": "postman-request",
				Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			},
			OAUth: process.env.GITHUB_ACCESS_TOKEN,
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
			try {
				const result = JSON.parse(body);
				res.status(statusCode).send({
					success: true,
					json: result,
				});
			} catch (err) {
				res.status(statusCode).send({
					success: false,
					error: {
						message:
							"Github is temporarily unavailable. Please, return in several minutes",
					},
				});
			}
		}
	);
});

module.exports = {
	getGhProfile,
	getFollowers,
	getFollowing,
	getOrgs,
	getRepos,
};
