import {
    LOAD_ORDER,
    LOAD_ORDER_SUCCESS,
    LOAD_ORDER_FAIL
} from './index'

export const orders = () => ({
    types: [LOAD_ORDER, LOAD_ORDER_SUCCESS, LOAD_ORDER_FAIL],
    payload: {
        request: {
            url: `/orders`,
        },
    },
});
