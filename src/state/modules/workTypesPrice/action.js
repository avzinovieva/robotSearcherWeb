import {
  LOAD_WORKTYPESPRICE,
  LOAD_WORKTYPESPRICE_SUCCESS,
  LOAD_WORKTYPESPRICE_FAIL,
}
  from './index';

export const price = (workTypeId) => ({
  types: [LOAD_WORKTYPESPRICE, LOAD_WORKTYPESPRICE_SUCCESS, LOAD_WORKTYPESPRICE_FAIL],
  payload: {
    request: {
      url: `/workTypes/${workTypeId}/price`,
    },
  },
});
