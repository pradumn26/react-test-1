import {combineReducers} from 'redux';
import authReducer from './authReducer';

const combinedReducer = combineReducers({
    authReducer
});

export default combinedReducer;