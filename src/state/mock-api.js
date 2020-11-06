import axios from 'axios';
import mockApi from '../api-mocks';

const mockAPI = axios.create({
  baseURL: 'http://0.0.0.0:80/api/v1',
  headers: {
    Authorization: 'Bearer todo',
  },
  responseType: 'json',
});

mockApi(mockAPI);

export default mockAPI;
