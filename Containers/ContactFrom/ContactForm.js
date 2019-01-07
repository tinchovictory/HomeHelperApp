import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contactContainer: {
    paddingTop: 60,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default class ContactForm extends Component {
  state={};

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.contactContainer}>
        <Text>Contactar</Text>
        <Button
          title="Close"
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    );
  }
}
