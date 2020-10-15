export const LOAD_MASTERS = 'mastersList/LOAD_MASTERS';
export const LOAD_MASTERS_SUCCESS = 'mastersList/LOAD_MASTERS_SUCCESS';
export const LOAD_MASTERS_FAIL = 'mastersList/LOAD_MASTERS_FAIL';

const initialState = {
    loading: false,
    orders: [],
};

const actionHandlers = {
    [LOAD_MASTERS](state) {
        return { ...state, loading: true};
    },
    [LOAD_MASTERS_SUCCESS](state, action) {
        return { ...state, loading: false, masters: action.payload.data};
    },
    [LOAD_MASTERS_FAIL](state, action) {
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
