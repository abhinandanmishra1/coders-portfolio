import axiosClient from "api/axiosClient";

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

const Functions = {
    getLanguagesCount,
    getTagProblemCounts,
    getUserContestRatingInfo,
    getUserProblemsSolvedInfo,
    getUserBadgesInfo,
    getUserRecentAcSubmissions,
}

export default Functions;
