import { combineReducers } from 'redux';
import { apikeyReducer } from './apiKeyReducer';
import { sideBarReducer } from './sideBarReducer';
import { searchNickNameReducer } from './searchNickNameReducer';

// searchNickNameReducer
export const rootReducer = combineReducers({ apikeyReducer, sideBarReducer, searchNickNameReducer });
