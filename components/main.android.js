import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Login from './login';
import Home from './home';

export default class Main extends Component {
  constructor(){
    super();
    this.renderSceneFunction = this.renderSceneFunction.bind(this);
  }

  renderSceneFunction(route,navigator){
    switch(route.id){
      case 'Login' : return(<Login navigator = {navigator}></Login>);
      case 'Home' : return(<Home navigator = {navigator}></Home>);
    }
  }

  render() {
    return (
      <Navigator initialRoute = {{id : 'Login'}} renderScene = {this.renderSceneFunction}/>
    );
  }
}