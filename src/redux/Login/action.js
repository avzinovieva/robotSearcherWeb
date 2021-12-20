import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './index';

export const login = (email, password) => ({
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    payload: {
        request: {
            method: 'post',
            url: '/user/token',
            data: {email, password },
        },
    },
});