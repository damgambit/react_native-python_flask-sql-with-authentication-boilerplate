import React from 'react';
import {connect} from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import {removeAlert} from '../actions';
var createReactClass = require('create-react-class');



var Alert = createReactClass({
  onRemoveAlert() {
  	this.props.dispatch(removeAlert(this.props.alert.id));
  },

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRemoveAlert}>
  	    <View style={styles.container}>
  		   	<Text style={styles.text}>
  		      	{this.props.alert.text}
  	      </Text>
  	    </View>
      </TouchableWithoutFeedback>
    );
  }

});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f2dede',
    borderColor: '#ebccd1',
    borderTopWidth: 2
  },
  text: {
  	color: '#a94442'
  }
});


module.exports = connect()(Alert);