import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ContactForm extends Component {
  state={};

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ marginTop: 60 }}>
        <Text>Contatar</Text>
        <Button
          title="Close"
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    );
  }
}
