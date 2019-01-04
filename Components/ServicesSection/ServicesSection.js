import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default class ServicesSection extends Component {
  state = {};

  render() {
    return (
      <View>
        <Text style={styles.sectionTitle}>Servicios</Text>
      </View>
    );
  }
}
