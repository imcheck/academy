import { combineReducers } from 'redux';

import page from './pageReducer';
import user from './userReducer';

export default combineReducers({
  page,
  user
});