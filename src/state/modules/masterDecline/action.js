import {
  LOAD_MASTER_DECLINE,
  LOAD_MASTER_DECLINE_SUCCESS,
  LOAD_MASTER_DECLINE_FAIL,
} from './index';

export const masterDecline = (id, reason) => ({
  types: [
    LOAD_MASTER_DECLINE,
    LOAD_MASTER_DECLINE_SUCCESS,
    LOAD_MASTER_DECLINE_FAIL],
  payload: {
    request: {
      method: 'post',
      url: `/master/${id}/decline`,
      data: {reason: reason},
    },
  },
});
