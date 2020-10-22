export const LOAD_MASTER_DECLINE = 'master/LOAD_MASTER_DECLINE';
export const LOAD_MASTER_DECLINE_SUCCESS = 'master/LOAD_MASTER_DECLINE_SUCCESS';
export const LOAD_MASTER_DECLINE_FAIL = 'master/LOAD_MASTER_DECLINE_FAIL';

const initialState = {
    loading: false,
    orders: [],
};

const actionHandlers = {
    [LOAD_MASTER_DECLINE](state) {
        return { ...state, loading: true};
    },
    [LOAD_MASTER_DECLINE_SUCCESS](state) {
        return { ...state, loading: false};
    },
    [LOAD_MASTER_DECLINE_FAIL](state, action) {
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
