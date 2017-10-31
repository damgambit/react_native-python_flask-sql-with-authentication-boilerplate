/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './components/App';
import {configureStore} from './store';


export default class client extends Component {
  render() {
    return (
      <Provider store={configureStore()}>

        <App />

      </Provider>
    );
  }
}

AppRegistry.registerComponent('client', () => client);
