import React from 'react';
import {
  View, TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: '100%',
  },
  showMoreBtn: {
    width: 80,
    marginTop: 10,
  },
  showMoreBtnText: {
    color: '#20A98C',
    textAlign: 'center',
  },
});

const ShowMoreBtn = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.showMoreBtn}
    >
      <Text style={styles.showMoreBtnText}>Ver mas</Text>
    </TouchableOpacity>
  </View>
);

ShowMoreBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ShowMoreBtn;
