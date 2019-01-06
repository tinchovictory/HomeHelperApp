import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Reviews extends Component {
  state={};

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ marginTop: 60 }}>
        <Text>Reviews</Text>
        <Button
          title="Close"
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    );
  }
}
