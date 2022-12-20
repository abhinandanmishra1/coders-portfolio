import axiosClient from "api/axiosClient";

function loadProfile(username = null){
    const url = `/github/profile`;
    return axiosClient.get(url, {username});
}

function loadFollowers(username = null){
    const url = `/github/followers`;
    return axiosClient.get(url, {username});
}

function loadFollowing(username = null){
    const url = `/github/following`;
    return axiosClient.get(url, {username});
}

function loadOrgs(username = null){
    const url = `/github/orgs`;
    return axiosClient.get(url, {username});
}

function loadRepos(username = null){
    const url = `/github/repos`;
    return axiosClient.get(url, {username});
}

const Functions = {
    loadProfile,
    loadFollowers,
    loadFollowing,
    loadOrgs,
    loadRepos,
}

export default Functions;
