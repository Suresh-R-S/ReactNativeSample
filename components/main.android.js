import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Hello name = 'Rebin'></Hello>
        <Hello name = 'Gokul'></Hello>
        <Hello name = 'Anoop'></Hello>
      </View>
    );
  }
}

class Hello extends Component{
  render(){
    return(
      <Text style = {styles.welcome}>
          Hello {this.props.name} !!
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});