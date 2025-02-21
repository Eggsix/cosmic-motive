import { combineReducers } from 'redux';
import { AppReducer } from './AppReducer';
import { WorkReducer } from './WorkReducer';

export const rootReducer = combineReducers({
    AppReducer,
    WorkReducer
})