
// eslint-disable-next-line max-len
export const LOAD_MASTERS_REQUESTS = 'mastersRequestsList/LOAD_MASTERS_REQUESTS';
// eslint-disable-next-line max-len
export const LOAD_MASTERS_REQUESTS_SUCCESS = 'mastersRequestsList/LOAD_MASTERS_REQUESTS_SUCCESS';
// eslint-disable-next-line max-len
export const LOAD_MASTERS_REQUESTS_FAIL = 'mastersRequestsList/LOAD_MASTERS_REQUESTS_FAIL';

const initialState = {
  loading: false,
  orders: [],
};

const actionHandlers = {
  [LOAD_MASTERS_REQUESTS](state) {
    return {...state, loading: true};
  },
  [LOAD_MASTERS_REQUESTS_SUCCESS](state, action) {
    return {...state, loading: false, mastersRequests: action.payload.data};
  },
  [LOAD_MASTERS_REQUESTS_FAIL](state, action) {
    return {...state, loading: false, error: action.error};
  },
};

// eslint-disable-next-line require-jsdoc
export default function reducer(state = initialState, action = {}) {
  const {type} = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(state, action);
  }

  return state;
}
