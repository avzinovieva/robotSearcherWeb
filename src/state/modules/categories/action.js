import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAIL,
}
  from './index';

export const categories = () => ({
  types: [LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAIL],
  payload: {
    request: {
      url: '/categories',
    },
  },
});
