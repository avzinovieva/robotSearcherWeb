import {
  SEND_CATEGORIESPRICE,
  SEND_CATEGORIESPRICE_SUCCESS,
  SEND_CATEGORIESPRICE_FAIL,
}
  from './index';

export const categoriesPrice = (categories) => ({
  types: [SEND_CATEGORIESPRICE, SEND_CATEGORIESPRICE_SUCCESS, SEND_CATEGORIESPRICE_FAIL],
  payload: {
    request: {
      method: 'post',
      url: '/admin/add/categories',
      data: categories,
    },
  },
});
