import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Login extends Component{

	loginButtonPressed(){
		this.props.navigator.push({
			id : 'Home'
		});
	}

	render(){
		return(
			<View style = {styles.container}>
			<Text>Login Screen</Text>
			<Button onPress = {this.loginButtonPressed.bind(this)} title = 'Login'/>
			</View>
		);
	}
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});