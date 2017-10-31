import uuid from 'uuid'; 
import {combineReducers} from 'redux';

import authReducer from './authReducer';
import alertsReducer from './alertsReducer';

module.exports = combineReducers({
	auth: authReducer,
	alerts: alertsReducer
});

