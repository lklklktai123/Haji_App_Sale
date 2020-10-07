//rnc : react native component
//imrc : import react , component

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Login from './src/screen/Login';
import Register from './src/screen/Register';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <Register />
      </SafeAreaView>
    );
  }
}

