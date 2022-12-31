export const formatProfileData = (profileData) => {
	console.log(profileData);
};

export const formatCertificateData = (certificateData) => {
	return certificateData.map((certi) => {
		const { label: title, level } = certi.attributes.certificate;
		const url = certi.attributes.certificate_image;

		return {
			title,
			level,
			url,
		};
	});
};

export const formatBadgesData = (badgesData) => {
	return badgesData.map((badgeData) => {
		const {
			badge_name: title,
			badge_short_name: short_title,
			stars,
		} = badgeData;

		return {
			title,
			short_title,
			stars,
		};
	});
};

export const formatLeecodeContestHistoryData = (contestHistoryData) => {
	const currentContestRating = contestHistoryData.userContestRanking;
	const contestHistory = contestHistoryData.userContestRankingHistory?.filter(
		(contest) => contest.attended
	);

	return {
		currentContestRating,
		contestHistory,
	};
};

export const getRatings = (contests) => {
	return contests.map((contest) => Math.round(contest.rating));
};

export const getCfRatings = (contests) => {
	return contests.map((contest) => contest.newRating);
};

export const getDateKey = (date) => {
	const day = date.getDate().toString().padStart(2, "0");
	const month = date.getMonth().toString().padStart(2, "0");
	const year = date.getFullYear();

	return `${day}${month}${year}`;
};
const formatSubmissionCalendarData = (data) => {
	const jsonData = JSON.parse(data);

	const formattedData = {};
	for (let key in jsonData) {
		const date = new Date(parseInt(key) * 1000);
		formattedData[getDateKey(date)] = jsonData[key];
	}
	return formattedData;
};

export const formatCalendarData = (calendarData) => {
	calendarData.matchedUser.userCalendar.submissionCalendar =
		formatSubmissionCalendarData(
			calendarData.matchedUser.userCalendar.submissionCalendar
		);

	return calendarData.matchedUser.userCalendar;
};

export const getTagProblems = (problems) => {
	const store = new Map();
	problems
		.filter((d) => d.verdict === "OK")
		.forEach((problemData) => {
			problemData?.problem?.tags?.forEach((tag) => {
				const tagName = tag.split(" ").join("-");
				store.set(tagName, (store.get(tagName) || 0) + 1);
			});
		});

	const result = [];
	for (let [key, value] of store) {
		result.push({ tagName: key, problemsCount: value });
	}

	result.sort((a, b) => b.problemsCount - a.problemsCount);
	return result;
};

export const getProblemRatingsCount = (problems) => {
	const store = new Map();
	problems
		.filter((d) => d.verdict === "OK")
		.forEach((problemData) => {
			const { rating } = problemData?.problem;
			store.set(rating, (store.get(rating) || 0) + 1);
		});

	const result = [];
	for (let [key, value] of store) {
		result.push({ rating: key, problemsCount: value });
	}

	result.sort((a, b) => b.rating - a.rating);
	return result;
};

export const getSubmissionsData = (problems) => {
	const store = new Map();
	problems.forEach((problem) => {
		const { creationTimeSeconds } = problem;
		const date = new Date(creationTimeSeconds * 1000);
		date.setHours(0, 0, 0, 0);
		const time = date.getTime();
		store.set(time, (store.get(time) || 0) + 1);
	});

	const result = {};
	for (let [key, value] of store) {
		const date = new Date(parseInt(key));
		result[getDateKey(date)] = value;
	}

	return result;
};

export function getMonthName(monthNumber) {
	const MonthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return MonthNames[monthNumber - 1];
}

export function getProfileData(data) {
	const {
		username,
		email,
		githubUsername,
		codeforcesUsername,
		hackerrankUsername,
		leetcodeUsername,
		codechefUsername,
		linkedinUrl,
		githubUrl,
		twitterUrl,
		instagramUrl,
		fullName,
		designation,
		resumeUrl,
		about,
		country,
		phone,
		address
	} = data;

	return {
		username,
		email,
		githubUsername,
		codeforcesUsername,
		hackerrankUsername,
		leetcodeUsername,
		codechefUsername,
		linkedinUrl,
		githubUrl,
		twitterUrl,
		instagramUrl,
		fullName,
		designation,
		resumeUrl,
		about,
		country,
		phone,
		address
	};
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}
