import axiosClient from "api/axiosClient";

function loadUser({username, token}){
    const url = `/user`;
    return axiosClient.post(url, {username, token});
}

function updateUser(updatedUser){
    const url = `/user`;
    return axiosClient.put(url, updatedUser);
}

const Functions = {
    loadUser,
    updateUser
}

export default Functions;
