import { USER_LOADING, USER_LOADED, 
    LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, LOGOUT_SUCCESS,
REGISTER_FAIL, REGISTER_SUCCESS } from '../actions/types';

const initialState = {
    user: null,
    isLoading: false,
    isAuthenticated: null,
    token: localStorage.getItem('token')
}

export default function authReducer(state=initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }
        default: 
            return state;
    }
}