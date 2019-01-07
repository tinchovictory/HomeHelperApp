import React, { Component } from 'react';
import {
  View, Animated, Text, StyleSheet, TouchableOpacity, TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { Constants } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HEADER_MAX_HEIGHT = 180;
export const HEADER_MIN_HEIGHT = 88;
export const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  headerContainer: {
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
    flexDirection: 'row',
  },
  searchBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_MAX_HEIGHT,
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 1,
  },
  searchBarContainer: {
    marginTop: 60,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
  },
  homeHelperTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  searchIconContainer: {
    right: 30,
    position: 'absolute',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  searchIcon: {
    color: '#fff',
  },
  searchInput: {
    height: 35,
    backgroundColor: '#70D9C3',
    borderRadius: 4,
    paddingLeft: 40,
    paddingRight: 5,
    flexDirection: 'row',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  inputIconContainer: {
    padding: 10,
    position: 'absolute',
    paddingTop: 7,
    top: 0,
    left: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class SearchHeader extends Component {
  static propTypes = {
    scrollY: PropTypes.shape().isRequired,
    scrollTopList: PropTypes.func.isRequired,
    handleLocationChange: PropTypes.func.isRequired,
    handleServiceTypeChange: PropTypes.func.isRequired,
  };

  state={
    serviceType: '',
    location: '',
  };

  updateServiceTypeChange = (text) => {
    this.setState({ serviceType: text });
    const { handleServiceTypeChange } = this.props;
    handleServiceTypeChange(text);
  }

  updateLocationChange = (text) => {
    this.setState({ location: text });
    const { handleLocationChange } = this.props;
    handleLocationChange(text);
  }

  render() {
    const {
      scrollY, scrollTopList,
    } = this.props;
    const { serviceType, location } = this.state;

    const headerHeight = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const searchBarOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const searchBarTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE - 0.001, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50, -200],
      extrapolate: 'clamp',
    });
    const barOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.headerContainer, { height: headerHeight }]}>
        <Animated.View
          style={[
            styles.searchBar,
            { opacity: searchBarOpacity, transform: [{ translateY: searchBarTranslate }] },
          ]}
        >
          <View style={styles.searchBarContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.inputIconContainer}>
                <Ionicons name="ios-list" size={20} style={{ color: '#57AB9F' }} />
              </View>
              <TextInput
                style={styles.searchInput}
                placeholder="Tipo de servicio"
                value={serviceType}
                onChangeText={this.updateServiceTypeChange}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputIconContainer}>
                <Ionicons name="ios-pin" size={20} style={{ color: '#57AB9F' }} />
              </View>
              <TextInput
                style={styles.searchInput}
                placeholder="Ubicacion"
                value={location}
                onChangeText={this.updateLocationChange}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            { opacity: barOpacity },
          ]}
        >
          <Text style={styles.homeHelperTitle}>Home Helper</Text>
          <TouchableOpacity
            style={styles.searchIconContainer}
            onPress={scrollTopList}
          >
            <Ionicons name="ios-search" size={25} style={styles.searchIcon} />
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    );
  }
}
