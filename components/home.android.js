import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Home extends Component{
	render(){
		return(
			<View style = {styles.container}>
			<Button onPress = {this.props.navigator.pop} title='Back'/>
			<Text>Home Screen</Text>
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