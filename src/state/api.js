import axios from 'axios'

const API = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/fixe.services/v1',
    headers: {
        Authorization: 'Bearer todo',
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
    },
    responseType: 'json',
});









export default API;