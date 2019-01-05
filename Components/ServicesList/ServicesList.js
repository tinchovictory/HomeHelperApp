import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ServiceListItem from './ServiceListItem/ServiceListItem';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
});

const ServicesList = ({ servicesList, active, onPressItem }) => (
  <FlatList
    data={servicesList}
    style={styles.container}
    renderItem={({ item }) => (
      <ServiceListItem
        item={item}
        onPress={() => { onPressItem(item.id); }}
        active={active}
      />
    )}
    horizontal
    keyExtractor={item => item.id.toString()}
    extraData={active}
  />
);

ServicesList.propTypes = {
  servicesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  active: PropTypes.number,
  onPressItem: PropTypes.func.isRequired,
};

export default ServicesList;
