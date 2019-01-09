import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
    flexDirection: 'row',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
    marginRight: 20,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#444',
  },
  serviceType: {
    fontSize: 12,
    marginTop: 5,
    fontStyle: 'italic',
    color: '#777',
  },
  date: {
    marginTop: 5,
    color: '#777',
    fontStyle: 'italic',
  },
  badge: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 5,
    height: 25,
  },
  badgeTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

const AppointmentListItem = ({ item }) => {
  const statusToColor = {
    Pending: '#f0ad4e',
    Canceled: '#e00808',
    Confirmed: '#5bc0de',
    Done: '#5cb85c',
  };

  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.profileImage}
        source={{ uri: item.img }}
      />
      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.serviceType}>{item.serviceType}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: statusToColor[item.status] }]}>
          <Text style={styles.badgeTxt}>{item.status}</Text>
        </View>
      </View>
    </View>
  );
};

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
