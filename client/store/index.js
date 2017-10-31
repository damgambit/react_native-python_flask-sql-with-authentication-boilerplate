import {createStore, compose, applyMiddleware} from 'redux';
import {AsyncStorage} from 'react-native';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from '../reducer';


exports.configureStore = () => {
	var store = createStore(reducer,applyMiddleware(thunk));
	//persistStore(store, {storage: AsyncStorage});
	return store;
}