import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({

});

const AppointmentListItem =  ({ id, name, img, status, serviceType, date }) => (
  <View>
    <Text>Item</Text>
  </View>
);

AppointmentListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    serviceType: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default AppointmentListItem;
