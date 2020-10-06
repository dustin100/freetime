import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import searches from './searches'

export default combineReducers({ alert, auth, profile, searches  });
