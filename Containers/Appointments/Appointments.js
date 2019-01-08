import React, { Component } from 'react';
import { View, Text, SegmentedControlIOS, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  switchControl: {
    padding: 20,
  },
});

export default class Appointments extends Component {
  static navigationOptions = {
    title: 'Citas',
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
      <View>
        <View style={styles.switchControl}>
          <SegmentedControlIOS
            values={['Pendientes', 'Completadas']}
            tintColor="#26B99A"
          />
        </View>
        <Text>Appointments</Text>
      </View>
    );
  }
}
