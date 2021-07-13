import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './index';

export const login = (user) => ({
  types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
  payload: {
    request: {
      method: 'post',
      url: '/auth/token',
      data: { login: user.login, password: user.password },
    },
  },
});
