export const LOAD_MASTER_ACCEPTION = 'master/LOAD_MASTER_ACCEPTION';
// eslint-disable-next-line max-len
export const LOAD_MASTER_ACCEPTION_SUCCESS = 'master/LOAD_MASTER_ACCEPTION_SUCCESS';
export const LOAD_MASTER_ACCEPTION_FAIL = 'master/LOAD_MASTER_ACCEPTION_FAIL';

const initialState = {
  loading: false,
  orders: [],
};

const actionHandlers = {
  [LOAD_MASTER_ACCEPTION](state) {
    return {...state, loading: true};
  },
  [LOAD_MASTER_ACCEPTION_SUCCESS](state) {
    return {...state, loading: false};
  },
  [LOAD_MASTER_ACCEPTION_FAIL](state, action) {
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
