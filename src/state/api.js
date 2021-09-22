import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mastersJson from '../components/MastersList/masters.json';
import mastersRequestsJson
  from '../components/MastersRequestsTab/mastersRequests.json';

const API = axios.create({
  baseURL: 'https://api-fixe.com/v1',

  headers: {
    Authorization: 'Bearer todo',
  },
  responseType: 'json',
});

const mock = new MockAdapter(API, {onNoMatch: 'passthrough'});
mock.onGet('/masters').reply(200, mastersJson);
mock.onGet('/mastersRequests').reply(200, mastersRequestsJson);

export default API;
