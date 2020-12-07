import reducer, {
  LOAD_ORDER,
  LOAD_ORDER_SUCCESS,
  LOAD_ORDER_FAIL,
} from './index';

describe('orders reducer', () => {
  describe('LOAD_ORDER action', () => {
    it('sets loading to true', () => {
      const actual = reducer(null, {type: LOAD_ORDER});
      expect(actual).toEqual({loading: true});
    });
  });

  describe('LOAD_ORDER_SUCCESS action', () => {
    it('sets loading to false and orders success', () => {
      const orders = [
        {
          masterImageUrl: 'url',
          masterName: 'master name',
          orderStatus: 'on holding',
          orderId: '1',
          requestDate: '2011-10-05T14:48:00.000Z',
          extraPrice: '200',
        },
        {
          masterImageUrl: 'url1',
          masterName: 'master name1',
          orderStatus: 'waiting for approve',
          orderId: '2',
          requestDate: '2011-10-05T14:48:00.000Z',
          extraPrice: '100',
        },
      ];
      const actual = reducer(null,
          {type: LOAD_ORDER_SUCCESS, payload: {data: orders}});
      expect(actual).toMatchObject({loading: false});
    });
  });

  describe('LOAD_ORDER_FAIL action', () => {
    it('sets loading to false and orders error', () => {
      const error = {error: 'some error'};
      const actual = reducer(null, {type: LOAD_ORDER_FAIL, error});
      expect(actual).toEqual({loading: false, error});
    });
  });
});
