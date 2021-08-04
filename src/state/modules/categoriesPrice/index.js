export const SEND_CATEGORIESPRICE = 'categories/SEND_CATEGORIESPRICE';
export const SEND_CATEGORIESPRICE_SUCCESS = 'categories/SEND_CATEGORIESPRICE_SUCCESS';
export const SEND_CATEGORIESPRICE_FAIL = 'categories/SEND_CATEGORIESPRICE_FAIL';

const initialState = {
  loading: false,
  name: '',
  priceDefault: '',
};

const actionHandlers = {
  [SEND_CATEGORIESPRICE](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [SEND_CATEGORIESPRICE_SUCCESS](state) {
    return {
      ...state,
      loading: false,
    };
  },
  [SEND_CATEGORIESPRICE_FAIL](state, action) {
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
