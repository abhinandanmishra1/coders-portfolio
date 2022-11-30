import axiosClient from "api/axiosClient";

function loadProfile(username = 'abhi_mishra_1'){
    const profileUrl = `/hackerrank/profile`;
    return axiosClient.get(profileUrl, {username});
}

const Functions = {
    loadProfile,
}

export default Functions;
