export const LOAD_CATEGORIES = 'categories/LOAD_CATEGORIES';
export const LOAD_CATEGORIES_SUCCESS = 'categories/LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_FAIL = 'categories/LOAD_CATEGORIES_FAIL';

const initialState = {
  loading: false,
  categories: [],
};

const actionHandlers = {
  [LOAD_CATEGORIES](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [LOAD_CATEGORIES_SUCCESS](state, action) {
    return {
      ...state,
      loading: false,
      categories: action.payload.data,
    };
  },
  [LOAD_CATEGORIES_FAIL](state, action) {
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
