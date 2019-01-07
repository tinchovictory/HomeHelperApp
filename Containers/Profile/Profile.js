import React, { Component } from 'react';
import {
  View, ScrollView, StyleSheet, TouchableOpacity, Text, Animated,
} from 'react-native';

import Description from '../../Components/Description/Description';
import SectionDivider from '../../Components/SectionDivider/SectionDivider';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import ReviewsSection from '../../Components/ReviewsSection/ReviewsSection';

import ProfileHeaderBar from '../../Components/ProfileHeaderBar/ProfileHeaderBar';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 88;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  contactBtnContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#E1E1E1',
  },
  contactBtn: {
    width: '90%',
    padding: 10,
    backgroundColor: '#26B99A',
    borderRadius: 5,
    alignItems: 'center',
  },
  contactBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollViewContent: {
    padding: 20,
    marginTop: HEADER_MAX_HEIGHT,
  },
});

export default class Profile extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    const { navigation } = this.props;
    const { scrollY } = this.state;

    const headerHeight = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed scelerisque lectus. Aenean mollis arcu auctor lectus venenatis, sit amet semper lorem sollicitudin. In volutpat lorem eget ligula lacinia pulvinar. Integer sem libero, blandit sed massa sit amet, mattis euismod ligula. Donec quis tellus sem. Morbi maximus pulvinar ultrices. Maecenas vitae ultricies nunc, a rhoncus est. Vestibulum efficitur velit risus, id pharetra justo dapibus et. Nullam ut est in magna eleifend luctus sed ac lorem. Pellentesque eleifend tellus vel turpis egestas fermentum. Vivamus mattis sollicitudin tortor ut facilisis. In tincidunt, sem sed lacinia dignissim, nisi ex semper dui, semper euismod tellus lacus eget tellus. Pellentesque elementum, neque vehicula euismod commodo, nisl lorem ultricies eros, et tempus dolor urna nec ligula. Fusce ultricies neque et nisi consectetur volutpat eu sit amet ex. Sed pulvinar lorem sit amet tincidunt cursus. Nulla id faucibus erat.';

    const servicesList = [
      {
        id: 1,
        name: 'Carpintero',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed scelerisque lectus. Aenean mollis arcu auctor lectus venenatis, sit amet semper lorem sollicitudin. In volutpat lorem eget ligula lacinia pulvinar. Integer sem libero, blandit sed massa sit amet, mattis euismod ligula. Donec quis tellus sem. Morbi maximus pulvinar ultrices. Maecenas vitae ultricies nunc, a rhoncus est. Vestibulum efficitur velit risus, id pharetra justo dapibus et. Nullam ut est in magna eleifend luctus sed ac lorem. Pellentesque eleifend tellus vel turpis egestas fermentum. Vivamus mattis sollicitudin tortor ut facilisis. In tincidunt, sem sed lacinia dignissim, nisi ex semper dui, semper euismod tellus lacus eget tellus. Pellentesque elementum, neque vehicula euismod commodo, nisl lorem ultricies eros, et tempus dolor urna nec ligula. Fusce ultricies neque et nisi consectetur volutpat eu sit amet ex. Sed pulvinar lorem sit amet tincidunt cursus. Nulla id faucibus erat.',
      },
      {
        id: 2,
        name: 'Pintor',
        description: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed scelerisque lectus. Aenean mollis arcu auctor lectus venenatis, sit amet semper lorem sollicitudin. In volutpat lorem eget ligula lacinia pulvinar. Integer sem libero, blandit sed massa sit amet, mattis euismod ligula. Donec quis tellus sem. Morbi maximus pulvinar ultrices. Maecenas vitae ultricies nunc, a rhoncus est. Vestibulum efficitur velit risus, id pharetra justo dapibus et. Nullam ut est in magna eleifend luctus sed ac lorem. Pellentesque eleifend tellus vel turpis egestas fermentum. Vivamus mattis sollicitudin tortor ut facilisis. In tincidunt, sem sed lacinia dignissim, nisi ex semper dui, semper euismod tellus lacus eget tellus. Pellentesque elementum, neque vehicula euismod commodo, nisl lorem ultricies eros, et tempus dolor urna nec ligula. Fusce ultricies neque et nisi consectetur volutpat eu sit amet ex. Sed pulvinar lorem sit amet tincidunt cursus. Nulla id faucibus erat.',
      },
    ];

    return (
      <View style={styles.profileContainer}>
        <ScrollView
          style={styles.scrollViewContainer}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          )}
        >
          <View style={styles.scrollViewContent}>
            <Description
              text={loremIpsum}
              initialLength={300}
            />
            <SectionDivider />
            <ServicesSection servicesList={servicesList} />
            <SectionDivider />
            <ReviewsSection navigation={navigation} />
          </View>
        </ScrollView>
        <ProfileHeaderBar
          height={headerHeight}
          scrollY={scrollY}
          name="Martin Victory"
          serviceTypes={['Carpintero', 'Pintor']}
          score={4}
          img="http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image"
          handleGoBack={() => { navigation.goBack(); }}
        />
        <View style={styles.contactBtnContainer}>
          <TouchableOpacity
            style={styles.contactBtn}
            onPress={() => { navigation.navigate('ContactForm'); }}
          >
            <Text style={styles.contactBtnText}>Contactar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
