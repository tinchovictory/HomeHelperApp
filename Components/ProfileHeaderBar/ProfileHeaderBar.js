import React from 'react';
import {
  View, Animated, Text, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScoreStars from '../ScoreStars/ScoreStars';
import bgImg from '../../assets/ProfileBg.png';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 88;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#26B99A',
    overflow: 'hidden',
    paddingTop: Constants.statusBarHeight,
  },
  bar: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_MAX_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: null,
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  goBackBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  arrowBackIcon: {
    color: '#fff',
  },
  headerInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  serviceTypes: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#fff',
    marginTop: 5,
    marginBottom: 10,
  },
});

const ProfileHeaderBar = ({ height, scrollY, name, serviceTypes, score, img, handleGoBack }) => {
  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });
  const barOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });


  return (
    <Animated.View style={[styles.header, { height }]}>
      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={handleGoBack}
      >
        <Ionicons name="ios-arrow-back" size={25} style={styles.arrowBackIcon} />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.headerImage,
          { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] },
        ]}
      >
        <Image
          style={styles.backgroundImage}
          source={bgImg}
        />
        <View style={styles.headerInfoContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: img }}
          />
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.serviceTypes}>{serviceTypes.join(', ')}</Text>
          <ScoreStars score={score} color="#fff" size={18} />
        </View>
      </Animated.View>
      <Animated.View style={[styles.bar, { opacity: barOpacity }]}>
        <Text style={styles.title}>{name}</Text>
      </Animated.View>
    </Animated.View>
  );
};

export default ProfileHeaderBar;
