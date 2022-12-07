import axiosClient from "api/axiosClient";

function getUserInfo(username = null){
    const url = `/leetcode/userInfo`;
    return axiosClient.get(url, {username});
}

function getLanguagesCount(username = null){
    const url = `/leetcode/languages`;
    return axiosClient.get(url, {username});
}

function getTagProblemCounts(username = null){
    const url = `/leetcode/tagProblemCounts`;
    return axiosClient.get(url, {username});
}

function getUserContestRatingInfo(username = null){
    const url = `/leetcode/userContestRatingInfo`;
    return axiosClient.get(url, {username});
}

function getUserContestRatingHistogram(username = null){
    const url = `/leetcode/userContestRatingHistogram`;
    return axiosClient.get(url, {username});
}

function getUserProblemsSolvedInfo(username = null){
    const url = `/leetcode/userProblemsSolvedInfo`;
    return axiosClient.get(url, {username});
}

function getUserBadgesInfo(username = null){
    const url = `/leetcode/userBadgesInfo`;
    return axiosClient.get(url, {username});
}

function getUserRecentAcSubmissions(username = null){
    const url = `/leetcode/userRecentAcSubmissions`;
    return axiosClient.get(url, {username});
}

function getUserProfileCalendar(username = null){
    const url = `/leetcode/userProfileCalendar`;
    return axiosClient.get(url, {username});
}

const Functions = {
    getUserInfo,
    getLanguagesCount,
    getTagProblemCounts,
    getUserContestRatingInfo,
    getUserContestRatingHistogram,
    getUserProblemsSolvedInfo,
    getUserBadgesInfo,
    getUserRecentAcSubmissions,
    getUserProfileCalendar,
}

export default Functions;
