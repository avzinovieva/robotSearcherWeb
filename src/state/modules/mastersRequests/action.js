import {
  LOAD_MASTERS_REQUESTS,
  LOAD_MASTERS_REQUESTS_SUCCESS,
  LOAD_MASTERS_REQUESTS_FAIL,
} from './index';

export const mastersRequests = () => ({
  types: [
    LOAD_MASTERS_REQUESTS,
    LOAD_MASTERS_REQUESTS_SUCCESS,
    LOAD_MASTERS_REQUESTS_FAIL],
  payload: {
    request: {
      url: `/mastersRequests`,
    },
  },
});
