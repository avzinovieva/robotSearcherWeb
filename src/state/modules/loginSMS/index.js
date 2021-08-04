import { USER_SMS } from '../../../storageKeys';

export const LOGIN_SMS = 'loginSms/LOGIN_SMS';
export const LOGIN_SMS_SUCCESS = 'loginSms/LOGIN_SMS_SUCCESS';
export const LOGIN_SMS_FAIL = 'loginSms/LOGIN_SMS_FAIL';

const initialState = {
  loading: false,
};

const actionHandlers = {
  [LOGIN_SMS](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [LOGIN_SMS_SUCCESS](state, action) {
    localStorage.setItem(USER_SMS, action.payload);
    return {
      ...state,
      loading: false,
    };
  },
  [LOGIN_SMS_FAIL](state, action) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  },

};

// eslint-disable-next-line require-jsdoc
export default function reducer(state = initialState, action = {}) {
  const { type } = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(state, action);
  }

  return state;
}
