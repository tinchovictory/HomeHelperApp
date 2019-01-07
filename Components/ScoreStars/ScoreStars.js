import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row',
  },
});

const ScoreStars = ({ score }) => {
  const rating = [];
  let stars = parseInt(score, 10);

  let half;
  if (score - stars < 0.25) {
    half = false;
  } else if (score - stars < 0.75) {
    half = true;
  } else {
    half = false;
    stars += 1;
  }

  let pushedHalfStar = false;

  for (let i = 0; i < 5; i += 1) {
    if (i < stars) {
      rating.push(<Icon name="star" color="#444" key={i} />);
    } else if (half && !pushedHalfStar) {
      rating.push(<Icon name="star-half-o" color="#444" key={i} />);
      pushedHalfStar = true;
    } else {
      rating.push(<Icon name="star-o" color="#444" key={i} />);
    }
  }

  return (
    <View style={styles.starsContainer}>
      {rating}
    </View>
  );
};

ScoreStars.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreStars;
