export const PARTIAL_REGISTRATION = 'partialRegistration/PARTIAL_REGISTRATION';
export const PARTIAL_REGISTRATION_SUCCESS = 'partialRegistration/PARTIAL_REGISTRATION_SUCCESS';
export const PARTIAL_REGISTRATION_CODE_FAIL = 'partialRegistration/PARTIAL_REGISTRATION_CODE_FAIL';

const initialState = {
  loading: false,
};

const actionHandlers = {
  [PARTIAL_REGISTRATION](state) {
    return {...state, loading: true};
  },
  [PARTIAL_REGISTRATION_SUCCESS](state) {
    return {...state, loading: false};
  },
  [PARTIAL_REGISTRATION_CODE_FAIL](state, action) {
    return {...state, loading: false, error: action.error};
  },
};

export const partialRegistration = (user) => ({
  types: [PARTIAL_REGISTRATION, PARTIAL_REGISTRATION_SUCCESS, PARTIAL_REGISTRATION_CODE_FAIL],
  payload: {
    request: {
      method: 'post',
      url: `/users/register/partial`,
      data: {email: user.email, phone: user.phone, password: user.password},
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
