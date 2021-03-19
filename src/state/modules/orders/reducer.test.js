import reducer, {
  LOAD_ORDER,
  LOAD_ORDER_SUCCESS,
  LOAD_ORDER_FAIL,
} from './index';

describe('orders reducer', () => {
  describe('LOAD_ORDER action', () => {
    it('sets loading to true', () => {
      const actual = reducer(null, { type: LOAD_ORDER });
      expect(actual).toEqual({ loading: true });
    });
  });

  describe('LOAD_ORDER_SUCCESS action', () => {
    it('sets loading to false and orders success', () => {
      const orders = [
        {
          userImage: 'url',
          userName: '',
          orderStatus: '',
          userId: '',
          requestDate: '',
          price: '',
        },
        {
          userImage: 'url',
          userName: '',
          orderStatus: '',
          userId: '',
          requestDate: '',
          price: '',
        },
      ];
      const actual = reducer(null,
        { type: LOAD_ORDER_SUCCESS, payload: { data: orders } });
      expect(actual).toMatchObject({ loading: false });
    });
  });

  describe('LOAD_ORDER_FAIL action', () => {
    it('sets loading to false and orders error', () => {
      const error = { error: 'some error' };
      const actual = reducer(null, { type: LOAD_ORDER_FAIL, error });
      expect(actual).toEqual({ loading: false, error });
    });
  });
});
