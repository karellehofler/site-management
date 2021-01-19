import axios from 'axios';
import { returnErrors } from './error';

import { USER_LOADING, 
    USER_LOADED, 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
    REGISTER_FAIL, 
    REGISTER_SUCCESS 
} from './types';

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axios.get('/api/auth/me', tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    })).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: AUTH_ERROR });
    });
};

export const loginUser = ({ email, password}) => dispatch => {
    const config = {
      headers: {
          'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    axios.post('/api/auth/login', body, config)
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch( err => {
        dispatch(
            returnErrors(err.response.data, err.response.sttus,
                'LOGIN_FAIL')
        );
        dispatch({type: LOGIN_FAIL})
    })
};

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
};

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type" : "application/json",
        }
    };

    if(token) {
        config.headers['x-auth-token'] = token;
    };

    return config;
}