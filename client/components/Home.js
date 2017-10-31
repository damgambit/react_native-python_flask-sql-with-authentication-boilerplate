import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {unauthUser} from '../actions';
var createReactClass = require('create-react-class');


var Home = createReactClass({
  unauth: function() {
  	this.props.dispatch(unauthUser);
  },

  render() {
    return (
      <View style={styles.container}>
      	<Text>
      		Welcome to the Home
      	</Text>
      	<TouchableOpacity onPress={this.unauth}>
      		<Text>
      			LogOut
      		</Text>
      	</TouchableOpacity>
      </View>
    );
  }

});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});



module.exports = connect()(Home);