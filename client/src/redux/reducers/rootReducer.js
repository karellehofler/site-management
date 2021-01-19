import { combineReducers } from 'redux';
import authReducer from './auth';
import linkReducer from './link';
import errorReducer from "./error";
export default combineReducers({
    auth: authReducer,
    link: linkReducer,
    error: errorReducer
})