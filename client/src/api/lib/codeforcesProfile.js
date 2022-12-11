import axiosClient from "api/axiosClient";

function loadProfile(username = null){
    const profileUrl = `/codeforces/profile`;
    return axiosClient.get(profileUrl, {username});
}

function loadContestRatings(username = null){
    const badgesUrl = `/codeforces/contestRatings`;
    return axiosClient.get(badgesUrl, {username});
}

function loadUserStatus(username = null){
    const badgesUrl = `/codeforces/status`;
    return axiosClient.get(badgesUrl, {username});
}

const Functions = {
    loadProfile,
    loadContestRatings,
    loadUserStatus
}

export default Functions;
