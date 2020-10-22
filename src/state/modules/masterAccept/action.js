import {
    LOAD_MASTER_ACCEPTION,
    LOAD_MASTER_ACCEPTION_SUCCESS,
    LOAD_MASTER_ACCEPTION_FAIL
} from './index'

export const masterAccept = id => ({
    types: [LOAD_MASTER_ACCEPTION, LOAD_MASTER_ACCEPTION_SUCCESS, LOAD_MASTER_ACCEPTION_FAIL],
    payload: {
        request: {
            method: 'post',
            url: `/master/${id}/accept`,
        },
    },
});