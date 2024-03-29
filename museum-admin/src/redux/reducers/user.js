import {
    AUTHENTICATED,
    UNAUTHENTICATED,
    ERROR_AUTHENTICATED
} from '../constants/user'

const initialState = {
    authenticated: false,
    error: false,
}

export default function user(state = initialState, action) {
    switch (action.type) {

        case AUTHENTICATED:
            return { ...state, authenticated: true, error: false };

        case UNAUTHENTICATED:
            return { ...state, authenticated: false, error: false };

        case ERROR_AUTHENTICATED:
            return { ...state, error: action.payload };

        default:
            return state

    }
}