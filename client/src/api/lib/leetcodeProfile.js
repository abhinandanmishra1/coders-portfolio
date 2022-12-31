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

function getUserDiscussionSolutions(username = null, orderBy = null){
    const url = `/leetcode/userDiscussionSolutions`;
    return axiosClient.get(url, {username, orderBy});
}

function getUserProfileCalendar(username = null, year = null){
    const url = `/leetcode/userProfileCalendar`;
    const params = {
        username,
        year : year || new Date().getFullYear(),
    }
    return axiosClient.get(url, params);
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
    getUserDiscussionSolutions,
    getUserProfileCalendar,
}

export default Functions;
