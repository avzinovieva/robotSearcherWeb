import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import ordersJson from '../components/OrderList/orders.json';

const API = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/138.68.71.188/v1',

    headers: {
        Authorization: 'Bearer todo',
    },
    responseType: 'json',
});

let mock = new MockAdapter(API, {onNoMatch: 'passthrough'})
mock.onGet('/orders').reply(200, ordersJson);

export default API;