import axios from "axios";

const baseURL = "https://portfolio-backend-gq18.onrender.com";

function get(url, params) {
    return axios({
        method: 'GET',
        url,
        baseURL,
        params
    }).then(response => response)
      .catch(error => error);
}

function post(url, data) {
    return axios({
        method: 'POST',
        url,
        baseURL,
        data
    }).then(response => response)
      .catch(error => error);
}

function put(url, data) {
    return axios({
        method: 'PUT',
        url,
        baseURL,
        data
    }).then(response => response)
      .catch(error => error);
}

export default {
    get,
    post,
    put
}
