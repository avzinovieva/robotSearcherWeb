import {
  LOAD_WORKTYPES,
  LOAD_WORKTYPES_SUCCESS,
  LOAD_WORKTYPES_FAIL,
}
  from './index';

export const workTypes = (id) => ({
  types: [LOAD_WORKTYPES, LOAD_WORKTYPES_SUCCESS, LOAD_WORKTYPES_FAIL],
  payload: {
    request: {
      url: `/categories/${id}/workTypes`,
    },
  },
});
