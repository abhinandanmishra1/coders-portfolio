import axios from "axios";

const baseURL = "http://localhost:5000";

function get(url, params) {
    return axios({
        method: 'GET',
        url,
        baseURL,
        params
    }).then(response => response)
      .catch(error => error);
}

export default {
    get,
}
