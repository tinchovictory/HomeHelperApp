import React, { Component } from 'react';
import { View } from 'react-native';

export default class Messages extends Component {
  static navigationOptions = {
    title: 'Mensajes',
    headerStyle: {
      backgroundColor: '#26B99A',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  };

  state = {};

  render() {
    return (
      <View />
    );
  }
}
