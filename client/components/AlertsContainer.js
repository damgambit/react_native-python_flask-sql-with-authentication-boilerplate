import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Alert from './Alert';
var createReactClass = require('create-react-class');


var AlertsContainer = createReactClass({
  

  render() {
    var renderAlerts = () => {
      return this.props.alerts.map((alert) => {
        return (
          <Alert alert={alert} key={alert.id}/>
        );
      });
    }

    return (
      <View style={styles.container}>
      	{renderAlerts()}
      </View>
    );
  }

});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0 
  }
});


var mapStateToProps = (state) => {
	return {
		alerts: state.alerts
	}
}


module.exports = connect(mapStateToProps)(AlertsContainer);