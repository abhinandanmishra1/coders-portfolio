const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const JWT_SECRET =
	"SDHDDWhssweiweu99e8378y##9472828!!*@&#^%&!(0jebdhabassdasodopaad";

const createUser = asyncHandler(async (req, res) => {
	const {
		username,
		codeforcesUsername,
		hackerrankUsername,
		leetcodeUsername,
		codechefUsername,
		githubUsername,
		password,
		email,
		linkedinUrl,
    githubUrl,
    twitterUrl,
    instagramUrl,
    fullName,
    designation,
    resumeUrl,
    about,
    country,
		experiences,
		education,
		projects
	} = req.body;

	if (!username) {
		res.status(400).send({
			success: false,
			error: "User name is required",
		});
		return;
	}

	if (!password) {
		res.status(400).send({
			success: false,
			error: "Password is required",
		});
		return;
	}

	if (!email) {
		res.status(400).send({
			success: false,
			error: "Email is required",
		});
		return;
	}

	const userExists = await User.findOne({ username });

	if (userExists) {
		res.status(400).send({
			success: false,
			error: "User already exists",
		});
		return;
	}

	const userDetails = {};

	userDetails.username = username;
	userDetails.email = email;

	userDetails.codeforcesUsername = codeforcesUsername || '';
	userDetails.leetcodeUsername = leetcodeUsername || '';
	userDetails.hackerrankUsername = hackerrankUsername || '';
	userDetails.codechefUsername = codechefUsername || '';
	userDetails.githubUsername = githubUsername || '';
	userDetails.linkedinUrl = linkedinUrl || '';
	userDetails.githubUrl = githubUrl || '';
	userDetails.twitterUrl = twitterUrl || '';
	userDetails.instagramUrl = instagramUrl || '';
	userDetails.fullName = fullName || '';
	userDetails.designation = designation || '';
	userDetails.resumeUrl = resumeUrl || '';
	userDetails.about = about || '';
	userDetails.country = country || '';
	userDetails.experiences = experiences || [];
	userDetails.education = education || [];
	userDetails.projects = projects || [];

	bcrypt.hash(password, saltRounds, async (err, hash) => {
		if (err) {
			res.send(err);
		} else {
			// Insert the new user into the database
			const token = jwt.sign({ username }, JWT_SECRET, {
				expiresIn: "1d",
			});

			res.cookie("token", token, {
				httpOnly: true,
				secure: true,
				sameSite: "none",
			});

			userDetails.password = hash;

			await User.create(userDetails)
				.then(() => res.status(201).json({ success: true, json: token }))
				.catch((err) => res.status(400).json({ success: false, error: err }));
		}
	});
});

const loginUser = asyncHandler(async (req, res) => {
	const { username, password } = req.body;

	if (!username) {
		res.status(400).send({
			success: false,
			error: "User name is required",
		});
		return;
	}

	if (!password) {
		res.status(400).send({
			success: false,
			error: "Password is required",
		});
		return;
	}

	const user = await User.findOne({ username });

	if (!user) {
		res.status(400).send({
			success: false,
			error: "User not found",
		});
	} else {
		const isMatched = await bcrypt.compare(password, user.password);
		if (isMatched) {
			const token = jwt.sign({ username: user.username }, JWT_SECRET, {
				expiresIn: "1d",
			});

			res.cookie("token", token, {
				httpOnly: true,
				secure: true,
				sameSite: "none",
			});

			res.status(200).send({
				success: true,
				json: token,
			});
		} else {
			res.status(400).send({
				success: false,
				error: "Incorrect password",
			});
		}
	}
});

const updateUser = asyncHandler(async (req, res) => {
	const {
		codeforcesUsername,
		hackerrankUsername,
		leetcodeUsername,
		codechefUsername,
		githubUsername,
		username,
		email
	} = req.body;

	const user = await User.findOne({ username });

	if (user) {
		user.codechefUsername = codechefUsername || user.codechefUsername;
		user.githubUsername = githubUsername || user.githubUsername;
		user.codeforcesUsername = codeforcesUsername || user.codeforcesUsername;
		user.hackerrankUsername = hackerrankUsername || user.hackerrankUsername;
		user.leetcodeUsername = leetcodeUsername || user.leetcodeUsername;
		user.email = email || user.email;
		if (linkedinUrl) userDetails.linkedinUrl = linkedinUrl;
		if (githubUrl) userDetails.githubUrl = githubUrl;
		if (twitterUrl) userDetails.twitterUrl = twitterUrl;
		if (instagramUrl) userDetails.instagramUrl = instagramUrl;
		if (fullName) userDetails.fullName = fullName;
		if (designation) userDetails.designation = designation;
		if (resumeUrl) userDetails.resumeUrl = resumeUrl;
		if (about) userDetails.about = about;
		if (country) userDetails.country = country;
		if (experiences) userDetails.experiences = experiences;
		if (education) userDetails.education = education;
		if (projects) userDetails.projects = projects;


		const updatedUser = await user.save();

		res.status(200).send({
			success: true,
			json: updatedUser,
		});
	} else {
		res.status(404);
		res.status(400).send({
			success: false,
			error: "User not found",
		});
	}
});

const deleteUser = asyncHandler(async (req, res) => {
	const { username } = req.body;

	const user = await User.findOne({ username });

	if (user) {
		await user.remove();
		res.json({
			success: true,
			message: "User removed",
		});
	} else {
		res.status(404);
		res.status(400).send({
			success: false,
			error: "User not found",
		});
	}
});

const getUser = asyncHandler(async (req, res) => {
	const { token, username: q_username } = req.body;

	let username = null;
	if (token) {
		const { username: token_username } = jwt.verify(token, JWT_SECRET);
		username = token_username;
	}

	if (!username && !q_username) {
		res.status(400).send({
			success: false,
			error: "User name is required",
		});
		return;
	}

	try {
		let user = await User.findOne({ username }).select("-password");

		if (!user) {
			user = await User.findOne({ username: q_username }).select("-password");
		}

		if (user) {
			res.status(200).send({
				success: true,
				json: user,
			});
		} else {
			res.status(404);
			res.status(400).send({
				success: false,
				error: "User not found",
			});
		}
	} catch (err) {
		res.send({
			success: false,
			error: err,
		});
	}
});

const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	if (!users) {
		res.status(404);
		res.status(400).send({
			success: false,
			error: "No users found",
		});
	}
	res.status(200).json(users);
});

module.exports = {
	createUser,
	updateUser,
	deleteUser,
	getUsers,
	getUser,
	loginUser,
};
