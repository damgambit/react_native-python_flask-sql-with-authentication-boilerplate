import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
//import {} from '../actions'

import Login from './Login';
import Main from './Main';
import AlertsContainer from './AlertsContainer';

var createReactClass = require('create-react-class');

import { DrawerLogin, TabMain } from '../config/routes';


var App = createReactClass({

  render() {
    var renderMainView = () => {
      if(this.props.user_id) {
        return (
          <TabMain />
        );
      } else {
        return (
          <DrawerLogin />
        );
      }    
    }

    return (
      <View style={{flex: 1}}>
        {renderMainView()}
        <AlertsContainer />
      </View>
    );
  }

});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

});


var mapStateToProps = (state) => {
	return {
		user_id: state.auth.user_id
	}
}


module.exports = connect(mapStateToProps)(App);