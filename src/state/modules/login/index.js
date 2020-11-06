import {USER_TOKEN} from '../../../storageKeys';

export const LOGIN = 'login/LOGIN';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'login/LOGIN_FAIL';

const initialState = {
  loading: false,
  username: '',
  password: '',
};

const actionHandlers = {
  [LOGIN](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [LOGIN_SUCCESS](state, action) {
    localStorage.setItem(USER_TOKEN, action.payload.data.access_token);
    return {
      ...state,
      loading: false,
    };
  },
  [LOGIN_FAIL](state, action) {
    localStorage.removeItem(USER_TOKEN);
    return {
      ...state,
      loading: false,
      error: action.error,
    };
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
