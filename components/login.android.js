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
			username : 'nayana.rv@experionglobal.com',
			password : 'qwerty'
		};
	}

	loginButtonPressed(){
    fetch(' http://52.29.160.71:9000/guest/login',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'deviceheader' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ODE0YzljYzEzMTU1ODdhOTMxN2Y2ZTgiLCJkZXZpY2VfaWQiOiIyMTc5NmFhNTk5ODVhMzVlIiwiZGV2aWNlX29zIjoiNC40LjQiLCJkZXZpY2VfbW9kZWwiOiJHVC1JOTMwMCIsImRhdGUiOjE0NzkxMDQ1MTgzNzMsImlhdCI6MTQ3OTEwNDUxOH0.kazNiuXe34bouGEzT5ZSakB06WywpbXWU69TfxgbXq8'
      },
      body: JSON.stringify({
        "platform": "android",
        "email": this.state.username,
        "language": "en",
        "password": this.state.password,
        "type_of_access": "normal"
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.code == 200 && responseJson.status == 1){
        ToastAndroid.show(responseJson.message,ToastAndroid.SHORT);
        this.props.navigator.push({
          id : 'Home'
        });
      }
      else{
        ToastAndroid.show(responseJson.message,ToastAndroid.SHORT);
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