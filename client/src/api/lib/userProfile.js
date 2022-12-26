import axiosClient from "api/axiosClient";

function loadUser(username = null){
    const url = `/user`;
    console.log(username);
    return axiosClient.get(url, {username});
}

const Functions = {
    loadUser,
}

export default Functions;
