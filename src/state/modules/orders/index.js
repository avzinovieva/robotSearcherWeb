export const LOAD_ORDER = 'orderList/LOAD_ORDER';
export const LOAD_ORDER_SUCCESS = 'orderList/LOAD_ORDER_SUCCESS';
export const LOAD_ORDER_FAIL = 'orderList/LOAD_ORDER_FAIL';

const initialState = {
    loading: false,
    orders: [],
};

const actionHandlers = {
    [LOAD_ORDER](state) {
        return { ...state, loading: true};
    },
    [LOAD_ORDER_SUCCESS](state, action) {
        return { ...state, loading: false, orders: action.payload.data};
    },
    [LOAD_ORDER_FAIL](state, action) {
        return { ...state, loading: false, error: action.error};
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
