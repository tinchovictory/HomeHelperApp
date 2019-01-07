import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropsTypes from 'prop-types';

import ReviewItem from './ReviewItem/ReviewItem';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginBottom: 10,
  },
});

const ReviewsList = ({ reviews }) => (
  <View style={styles.listContainer}>
    <FlatList
      data={reviews}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  </View>
);

ReviewsList.propTypes = {
  reviews: PropsTypes.arrayOf(PropsTypes.shape({
    id: PropsTypes.number.isRequired,
    name: PropsTypes.string.isRequired,
    date: PropsTypes.string.isRequired,
    img: PropsTypes.string.isRequired,
    description: PropsTypes.string.isRequired,
  })).isRequired,
};

export default ReviewsList;
