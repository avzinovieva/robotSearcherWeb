export const LOAD_WORKTYPES = 'workTypes/LOAD_WORKTYPES';
export const LOAD_WORKTYPES_SUCCESS = 'workTypes/LOAD_WORKTYPES_SUCCESS';
export const LOAD_WORKTYPES_FAIL = 'workTypes/LOAD_WORKTYPES_FAIL';

const initialState = {
  loading: false,
  workTypes: [],
};

const actionHandlers = {
  [LOAD_WORKTYPES](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [LOAD_WORKTYPES_SUCCESS](state, action) {
    return {
      ...state,
      loading: false,
      categories: action.payload.data,
    };
  },
  [LOAD_WORKTYPES_FAIL](state, action) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  },
};

export default function reducer(state = initialState, action = {}) {
  const { type } = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(state, action);
  }
  return state;
}
