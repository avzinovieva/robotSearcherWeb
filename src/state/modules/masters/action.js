import {
    LOAD_MASTERS,
    LOAD_MASTERS_SUCCESS,
    LOAD_MASTERS_FAIL
} from './index'

export const masters = () => ({
    types: [LOAD_MASTERS, LOAD_MASTERS_SUCCESS, LOAD_MASTERS_FAIL],
    payload: {
        request: {
            url: `/masters`,
        },
    },
});