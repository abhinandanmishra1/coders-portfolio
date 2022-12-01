import axiosClient from "api/axiosClient";

function loadProfile(username = null){
    const profileUrl = `/hackerrank/profile`;
    return axiosClient.get(profileUrl, {username});
}

function loadBadges(username = null){
    const profileUrl = `/hackerrank/badges`;
    return axiosClient.get(profileUrl, {username});
}

function loadCertificates(username = null){
    const profileUrl = `/hackerrank/certificates`;
    return axiosClient.get(profileUrl, {username});
}

const Functions = {
    loadProfile,
    loadBadges,
    loadCertificates,
}

export default Functions;
