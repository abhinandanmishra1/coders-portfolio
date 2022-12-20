import axiosClient from "api/axiosClient";

function loadProfile(username = null){
    const url = `/codechef/profile`;
    return axiosClient.get(url, {username});
}

const Functions = {
    loadProfile,
}

export default Functions;
