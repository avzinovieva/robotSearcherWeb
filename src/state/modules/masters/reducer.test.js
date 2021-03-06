import reducer, {
  LOAD_MASTERS,
  LOAD_MASTERS_SUCCESS,
  LOAD_MASTERS_FAIL,
} from './index';

describe('masters reducer', () => {
  describe('LOAD_MASTER action', () => {
    it('sets loading to true', () => {
      const actual = reducer(null, { type: LOAD_MASTERS });
      expect(actual).toEqual({ loading: true });
    });
  });

  describe('LOAD_MASTERS_SUCCESS action', () => {
    it('sets loading to false and masters success', () => {
      const masters = [
        {
          masterImageUrl: 'url',
          masterName: 'master name',
          masterEmail: 'master1@gmail.com',
          categories: [
            {
              id: 1,
              name: 'shoes',
            },
          ],
        },
        {
          masterImageUrl: 'url1',
          masterName: 'master name1',
          masterEmail: 'master2@gmail.com',
        },
      ];
      const actual = reducer(null,
        { type: LOAD_MASTERS_SUCCESS, payload: { data: masters } });
      expect(actual).toMatchObject({ loading: false });
    });
  });

  describe('LOAD_MASTERS_FAIL action', () => {
    it('sets loading to false and masters error', () => {
      const error = { error: 'some error' };
      const actual = reducer(null, { type: LOAD_MASTERS_FAIL, error });
      expect(actual).toEqual({ loading: false, error });
    });
  });
});
