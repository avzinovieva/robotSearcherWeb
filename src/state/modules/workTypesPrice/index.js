export const LOAD_WORKTYPESPRICE = 'workTypes/LOAD_WORKTYPESPRICE';
export const LOAD_WORKTYPESPRICE_SUCCESS = 'workTypes/LOAD_WORKTYPESPRICE_SUCCESS';
export const LOAD_WORKTYPESPRICE_FAIL = 'workTypes/LOAD_WORKTYPESPRICE_FAIL';

const initialState = {
  loading: false,
  price: [],
};

const actionHandlers = {
  [LOAD_WORKTYPESPRICE](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [LOAD_WORKTYPESPRICE_SUCCESS](state, action) {
    return {
      ...state,
      loading: false,
      price: action.payload.data,
    };
  },
  [LOAD_WORKTYPESPRICE_FAIL](state, action) {
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
