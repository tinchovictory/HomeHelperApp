import React, { Component } from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity, 
} from 'react-native';

import Description from '../Description/Description';

const styles = StyleSheet.create({
  reviewHeader: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  nameContainer: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: '600',
  },
  date: {
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 2,
  },
  allReviewsContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  allReviewsBtn: {
    padding: 5,
  },
  allReviewsText: {
    fontWeight: 'bold',
    color: '#34B096',
  },
});

export default class ReviewSection extends Component {
  state = {};

  render() {
    const { navigation } = this.props;

    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed scelerisque lectus. Aenean mollis arcu auctor lectus venenatis, sit amet semper lorem sollicitudin. In volutpat lorem eget ligula lacinia pulvinar. Integer sem libero, blandit sed massa sit amet, mattis euismod ligula. Donec quis tellus sem. Morbi maximus pulvinar ultrices. Maecenas vitae ultricies nunc, a rhoncus est. Vestibulum efficitur velit risus, id pharetra justo dapibus et. Nullam ut est in magna eleifend luctus sed ac lorem. Pellentesque eleifend tellus vel turpis egestas fermentum. Vivamus mattis sollicitudin tortor ut facilisis. In tincidunt, sem sed lacinia dignissim, nisi ex semper dui, semper euismod tellus lacus eget tellus. Pellentesque elementum, neque vehicula euismod commodo, nisl lorem ultricies eros, et tempus dolor urna nec ligula. Fusce ultricies neque et nisi consectetur volutpat eu sit amet ex. Sed pulvinar lorem sit amet tincidunt cursus. Nulla id faucibus erat.';

    return (
      <View>
        <View style={styles.reviewHeader}>
          <Image
            style={styles.profilePicture}
            source={{ uri: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image' }}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Martin</Text>
            <Text style={styles.date}>Enero 2019</Text>
          </View>
        </View>
        <Description
          text={loremIpsum}
          initialLength={150}
        />
        <View style={styles.allReviewsContainer}>
          <TouchableOpacity
            style={styles.allReviewsBtn}
            onPress={() => { navigation.navigate('ReviewsModal'); }}
          >
            <Text style={styles.allReviewsText}>Leer todas las reseñas</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
