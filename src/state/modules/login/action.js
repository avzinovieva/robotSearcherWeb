import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './index';

export const login = (phone, code) => ({
  types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
  payload: {
    request: {
      method: 'post',
      url: '/auth/token',
      data: { phoneNumber: phone, verificationCode: code },
    },
  },
});
