import React from 'react';
import {
  TouchableOpacity, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import WoodImg from '../../../assets/wood.png';
import PaintBrushImg from '../../../assets/paint-brush.png';

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 60,
    paddingRight: 60,
    marginRight: 10,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  active: {
    borderColor: '#878787',
  },
  iconText: {
    fontSize: 14,
    fontWeight: '500',
  },
  serviceIcon: {
    height: 30,
    maxWidth: 60,
    marginBottom: 10,
  },
});

const serviceIdToImg = {
  1: WoodImg,
  2: PaintBrushImg,
};

const ServiceListItem = ({ item, onPress, active }) => {
  const containerStyles = [styles.itemContainer];
  if (item.id === active) {
    containerStyles.push(styles.active);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyles}
    >
      <Image
        style={styles.serviceIcon}
        source={serviceIdToImg[item.id]}
        resizeMode="contain"
      />
      <Text style={styles.iconText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

ServiceListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  active: PropTypes.number,
};

export default ServiceListItem;
