import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionDivider: {
    width: '100%',
    height: 2,
    backgroundColor: '#E1E1E1',
    marginTop: 20,
    marginBottom: 20,
  },
});

const SectionDivider = () => (
  <View style={styles.sectionDivider} />
);

export default SectionDivider;
