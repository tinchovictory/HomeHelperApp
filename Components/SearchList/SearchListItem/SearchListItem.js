import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import ScoreStars from '../../ScoreStars/ScoreStars';

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    margin: 20,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    justifyContent: 'center',
    borderRadius: 5,
  },
  rowDescription: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  serviceTypes: {
    fontSize: 12,
    fontStyle: 'italic',
  }
});

const SearchListItem = ({
  name, navigation, serviceTypes, score,
}) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => navigation.navigate('ProfileScreen')}
  >
    <Image
      style={styles.profilePicture}
      source={{ uri: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image' }}
    />
    <View style={styles.rowDescription}>
      <View style={styles.rowName}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.serviceTypes}>{serviceTypes.join(', ')}</Text>
      </View>
      <ScoreStars score={score} size={15} />
    </View>
  </TouchableOpacity>
);

SearchListItem.propTypes = {
  name: PropTypes.string.isRequired,
  navigation: PropTypes.shape().isRequired,
  serviceTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  score: PropTypes.number.isRequired,
};

export default SearchListItem;
