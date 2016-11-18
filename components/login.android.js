import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image, 
  ToastAndroid
} from 'react-native';

export default class Login extends Component{
	constructor(){
		super();
		this.state = {
			username : '',
			password : ''
		};
	}

	loginButtonPressed(){
    fetch('http://experiontts.cloudapp.net:3000/user/login',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.code == 200 && responseJson.status == 1 && responseJson.data){
        ToastAndroid.show(responseJson.message,ToastAndroid.SHORT);
        this.props.navigator.push({
          id : 'Home'
        });
      }
      else{
        ToastAndroid.show('Invalid Credentials!!',ToastAndroid.SHORT);
      }
    })
    .catch((error) => {
      console.error(error);
    });
	}

	render(){
		return(
			<View style = {styles.container}>
			<Image style = {styles.loginImage} source = {require('../images/reactNative.png')}/> 
			<TextInput style = {styles.inputField} value = {this.state.username} onChangeText = {(username) => this.setState({username})}></TextInput>
			<TextInput style = {styles.inputField} secureTextEntry = {true} value = {this.state.password} onChangeText = {(password) => this.setState({password})}></TextInput>
			<Button onPress = {this.loginButtonPressed.bind(this)} title = 'Login'/>
      </View>
		);
	}
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor: '#F5FCFF',
  },
  loginImage : {
  	height : 100,
  	width : 110
  },
  inputField : {
  	width : 300
  }
});