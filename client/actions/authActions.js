import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import {AsyncStorage} from 'react-native';

import {SIGNIN_URL, SIGNUP_URL} from '../api';
import {addAlert} from './alertsActions';


exports.loginUser = (username, password) => {
	return function(dispatch) {
		return axios({url: SIGNIN_URL, method:'post', auth: {username, password}, data: {username: username}}).then((response) => {
			var {user_id, token} = response.data;
			console.log(response.data)
			try {
				AsyncStorage.setItem(user_id.toString(), token);
			} catch (error) {
				dispatch(addAlert("Could not sign in"));
			} finally {
				dispatch(authUser(user_id));
			}

		}).catch((error) => {
			dispatch(addAlert("Could not log in."));
		})
	} 
}


exports.signupUser = (email, username, password) => {
	return function(dispatch) {
		return axios.post(SIGNUP_URL, {email, username, password}).then((response) => {
			var {token, user_id} = response.data;

			try {
				AsyncStorage.setItem(user_id.toString(), token);
			} catch (error) {
				dispatch(addAlert("Could not sign up"));
			} finally {
				dispatch(authUser(user_id));
			}
		}).catch((error) => {
			dispatch(addAlert("Could not sign up."));
		})
	} 
}



authUser = (user_id) => {
	return {
		type: "AUTH_USER",
		user_id
	}
}


exports.unauthUser = {
	type: "UNAUTH_USER"
}