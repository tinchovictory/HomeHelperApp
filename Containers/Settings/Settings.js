import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  settingsContainer: {
    marginTop: 60,
    padding: 20,
  },
  mainTitle: {
    fontSize: 35,
    color: '#444',
    fontWeight: 'bold',
  },
});

export default class Settings extends Component {
  state = {};

  render() {
    return (
      <View style={styles.settingsContainer}>
        <Text style={styles.mainTitle}>Configuracion</Text>
      </View>
    );
  }
}
