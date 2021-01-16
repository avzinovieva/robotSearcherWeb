export const SET_REFERRAL_CODE = 'referrals/SET_REFERRAL_CODE';
export const SET_REFERRAL_CODE_SUCCESS = 'referrals/SET_REFERRAL_CODE_SUCCESS';
export const SET_REFERRAL_CODE_FAIL = 'referrals/SET_REFERRAL_CODE_FAIL';

export const CHECK_REFERRAL_CODE = 'referrals/CHECK_REFERRAL_CODE';
export const CHECK_REFERRAL_CODE_SUCCESS = 'referrals/CHECK_REFERRAL_CODE_SUCCESS';
export const CHECK_REFERRAL_CODE_FAIL = 'referrals/CHECK_REFERRAL_CODE_FAIL';

const initialState = {
  loading: false,
};

const actionHandlers = {
  [CHECK_REFERRAL_CODE](state) {
    return {...state, loading: true};
  },
  [CHECK_REFERRAL_CODE_SUCCESS](state) {
    return {...state, loading: false};
  },
  [CHECK_REFERRAL_CODE_FAIL](state, action) {
    return {...state, loading: false, error: action.error};
  },
};

export const getIsReferralValid = (inviteCode) => ({
  types: [CHECK_REFERRAL_CODE, CHECK_REFERRAL_CODE_SUCCESS, CHECK_REFERRAL_CODE_FAIL],
  payload: {
    request: {
      url: `/referrals/${inviteCode}`,
    },
  },
});

export const sendMyCode = (inviteCode) => ({
  types: [SET_REFERRAL_CODE, SET_REFERRAL_CODE_SUCCESS, SET_REFERRAL_CODE_FAIL],
  payload: {
    request: {
      method: 'post',
      url: `/referrals/${inviteCode}`,
      data: {inviteCode},
    },
  },
});

// eslint-disable-next-line require-jsdoc
export default function reducer(state = initialState, action = {}) {
  const {type} = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(state, action);
  }

  return state;
}
