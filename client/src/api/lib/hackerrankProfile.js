import axiosClient from "api/axiosClient";

function loadProfile(username = null){
    const profileUrl = `/hackerrank/profile`;
    return axiosClient.get(profileUrl, {username});
}

function loadBadges(username = null){
    const badgesUrl = `/hackerrank/badges`;
    return axiosClient.get(badgesUrl, {username});
}

function loadCertificates(username = null){
    const certificateUrl = `/hackerrank/certificates`;
    return axiosClient.get(certificateUrl, {username});
}

function loadExperiences(username = null){
    const certificateUrl = `/hackerrank/work`;
    return axiosClient.get(certificateUrl, {username});
}

function loadSchools(username = null){
    const certificateUrl = `/hackerrank/school`;
    return axiosClient.get(certificateUrl, {username});
}

const Functions = {
    loadProfile,
    loadBadges,
    loadCertificates,
    loadExperiences,
    loadSchools,
}

export default Functions;
