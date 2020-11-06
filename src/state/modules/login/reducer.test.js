import reducer, {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './index';

describe('login reducer', () => {
  describe('LOGIN action', () => {
    it('sets loading to true', () => {
      const actual = reducer(null, {type: LOGIN});
      expect(actual).toEqual({loading: true});
    });
  });

  describe('LOGIN_SUCCESS action', () => {
    it('sets loading to false and login success', () => {
      const user = {name: 'name'};
      const actual = reducer(null,
          {type: LOGIN_SUCCESS, payload: {data: user}});
      expect(actual).toMatchObject({loading: false});
    });
  });

  describe('LOGIN_FAIL action', () => {
    it('sets loading to false and login error', () => {
      const error = {error: 'some error'};
      const actual = reducer(null, {type: LOGIN_FAIL, error});
      expect(actual).toEqual({loading: false, error});
    });
  });
});
