import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import {loginUser, signupUser, addAlert} from '../actions';
var createReactClass = require('create-react-class');

var Login = createReactClass({
  getInitialState() {
  	return {
  		username: "",
  		password: "",
  		usernameError: "",
  		passwordError: "",
      loading: false
  	}
  },

  onSignIn: function() {
  	var {username, password} = this.state;
    var {dispatch} = this.props;

    this.setState({
      loading: true
    });

    dispatch(loginUser(username, password)).then(() => {
      this.setState({
        loading: false
      });
    });
  	
  },

  onSignUp: function() {
    this.props.navigation.navigate('Register');
    
  },

  validate: function() {
    this.setState({
  		usernameError: "",
  		passwordError: ""

  	});

  	if(!this.state.username) {
  		this.setState({
     			usernameError: "Please enter a Username."
     		});
  	}
  	if(!this.state.password) {
  		this.setState({
     			passwordError: "Please enter a Password."
     		});
  	}

    if(this.state.username && this.state.password) {
      return true;
    } else {
      return false;
    }
  },

  render() {
  	var renderError = (error) => {
  		if(error != "") {
  			return (
  				<Text style={styles.formError}>
  					{error}
  				</Text>
  			)
  		}
  	}

    if(this.state.loading) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Loading...
          </Text>
        </View>
      )

    } else {
      return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <StatusBar barStyle='light-content' />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              A or B ?
            </Text>
          </View>

          <View style={styles.inputFields}>
            <View style={styles.field}>
              <TextInput 
                value={this.state.username}
                autoCapitalize='none'
                autoCorrect={false} 
                returnKeyType='done'
                onChangeText={(text) => {
                  this.setState({
                    username: text
                  });
                }}
                placeholder='Username'
                style={styles.textInput} 
              />
              <View>
                {renderError(this.state.usernameError)}
              </View>
            </View>
            <View style={styles.field}>
              <TextInput 
                value={this.state.password}
                returnKeyType='done'
                autoCapitalize='none'
                autoCorrect={false} 
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
                placeholder='Password'
                style={styles.textInput} 
              />
              <View>
                {renderError(this.state.passwordError)}
              </View>
            </View>
            <View style={styles.actionsContainer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.onSignIn}>
                  <Text style={styles.button}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={this.onSignUp}>
                <Text style={styles.signup}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
  }

});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: '#4464AD'
  },
  titleContainer: {
  	padding: 10,
  	paddingTop: 20,
  	marginBottom: 10,
  	justifyContent: 'space-around',
  	alignItems: 'center',
    backgroundColor: '#4464AD',
    flex: 1.7
  },
  title: {
  	color: 'white',
  	fontSize: 30
  },
  inputFields: {
    paddingTop: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  field: {
  	padding: 20,
  	paddingLeft: 16,
  	borderRadius: 8,
  	margin: 10,
  	marginTop: 10,
    backgroundColor: '#A4B0F5',
  },
  textInput: {
    color: "#333",
    fontSize: 20
  },
  buttonContainer: {
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
    marginBottom: 4,
    borderRadius: 8,
    backgroundColor: "#0A2463",
  },
  button: {
  	color: '#ACB7F5',
    fontSize: 30,
  },
  actionsContainer:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10
  },
  signup: {
    fontSize: 18,
    color: "#0A2463"
  },
  formError: {
  	color: 'red'
  }
});


module.exports = connect()(Login);