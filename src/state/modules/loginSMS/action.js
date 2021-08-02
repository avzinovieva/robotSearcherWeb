import { LOGIN_SMS, LOGIN_SMS_SUCCESS, LOGIN_SMS_FAIL } from './index';

export const loginSms = (phone) => ({
  types: [LOGIN_SMS, LOGIN_SMS_SUCCESS, LOGIN_SMS_FAIL],
  payload: {
    request: {
      method: 'post',
      url: '/auth/sendSms',
      data: { phoneNumber: phone },
    },
  },
});
