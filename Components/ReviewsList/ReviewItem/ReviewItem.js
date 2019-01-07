import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ScoreStars from '../../ScoreStars/ScoreStars';

const styles = StyleSheet.create({
  reviewHeader: {
    marginBottom: 20,
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  rightHeaderContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameContainer: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  scoreContainer: {
    marginRight: 10,
  },
  name: {
    fontWeight: '600',
  },
  date: {
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 2,
  },
  descriptionContainer: {
    marginTop: 5,
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 20,
  },
  descriptionText: {
    color: '#444444',
    lineHeight: 20,
  },
});

const ReviewItem = ({ review }) => (
  <View>
    <View style={styles.reviewHeader}>
      <Image
        style={styles.profilePicture}
        source={{ uri: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image' }}
      />
      <View style={styles.rightHeaderContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{review.name}</Text>
          <Text style={styles.date}>{review.date}</Text>
        </View>
        <View style={styles.scoreContainer}>
          <ScoreStars score={3.5} />
        </View>
      </View>
    </View>
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionText}>{review.description}</Text>
    </View>
  </View>
);

ReviewItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewItem;
