import { USER_TOKEN } from '../../storageKeys';

export const LOGIN = 'login/LOGIN';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'login/LOGIN_FAIL';

const initialState = {
    loading: false,
    email: '',
    password: '',
};

const actionHandlers = {
    [LOGIN](state) {
        console.log(state.email)
        return {
            ...state,
            loading: true,
        };
    },
    [LOGIN_SUCCESS](state, action) {
        console.log(state.email)
        localStorage.setItem(USER_TOKEN, action.payload.data.access_token);
        return {
            ...state,
            loading: false,
        };
    },
    [LOGIN_FAIL](state, action) {
        console.log(state.email)
        localStorage.removeItem(USER_TOKEN);
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    },

};

// eslint-disable-next-line require-jsdoc
export default function loginReducer(state = initialState, action = {}) {
    const { types } = action;
    const actionHandler = actionHandlers[types];
    if (actionHandler) {
        return actionHandler(state, action);
    }

    return state;
}