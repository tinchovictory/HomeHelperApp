import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ReviewsList from '../../Components/ReviewsList/ReviewsList';

const styles = StyleSheet.create({
  reviewsContainer: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 30,
    padding: 10,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
  },
  closeBtn: {
    marginLeft: 20,
    padding: 5,
    width: 25,
  },
});

export default class Reviews extends Component {
  state={};

  render() {
    const { navigation } = this.props;

    const reviewsList = [
      {
        id: 1,
        name: 'Martin Victory',
        date: 'Enero 2019',
        img: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed scelerisque lectus. Aenean mollis arcu auctor lectus venenatis, sit amet semper lorem sollicitudin. In volutpat lorem eget ligula lacinia pulvinar. Integer sem libero, blandit sed massa sit amet, mattis euismod ligula. Donec quis tellus sem. Morbi maximus pulvinar ultrices. Maecenas vitae ultricies nunc, a rhoncus est. Vestibulum efficitur velit risus, id pharetra justo dapibus et. Nullam ut est in magna eleifend luctus sed ac lorem. Pellentesque eleifend tellus vel turpis egestas fermentum. Vivamus mattis sollicitudin tortor ut facilisis. In tincidunt, sem sed lacinia dignissim, nisi ex semper dui, semper euismod tellus lacus eget tellus. Pellentesque elementum, neque vehicula euismod commodo, nisl lorem ultricies eros, et tempus dolor urna nec ligula. Fusce ultricies neque et nisi consectetur volutpat eu sit amet ex. Sed pulvinar lorem sit amet tincidunt cursus. Nulla id faucibus erat.',
      },
      {
        id: 2,
        name: 'Martin Victory2',
        date: 'Enero 2019',
        img: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed scelerisque lectus. Aenean mollis arcu auctor lectus venenatis, sit amet semper lorem sollicitudin. In volutpat lorem eget ligula lacinia pulvinar. Integer sem libero, blandit sed massa sit amet, mattis euismod ligula. Donec quis tellus sem. Morbi maximus pulvinar ultrices. Maecenas vitae ultricies nunc, a rhoncus est. Vestibulum efficitur velit risus, id pharetra justo dapibus et. Nullam ut est in magna eleifend luctus sed ac lorem. Pellentesque eleifend tellus vel turpis egestas fermentum. Vivamus mattis sollicitudin tortor ut facilisis. In tincidunt, sem sed lacinia dignissim, nisi ex semper dui, semper euismod tellus lacus eget tellus. Pellentesque elementum, neque vehicula euismod commodo, nisl lorem ultricies eros, et tempus dolor urna nec ligula. Fusce ultricies neque et nisi consectetur volutpat eu sit amet ex. Sed pulvinar lorem sit amet tincidunt cursus. Nulla id faucibus erat.',
      },
      {
        id: 3,
        name: 'Martin Victory3',
        date: 'Enero 2019',
        img: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed scelerisque lectus. Aenean mollis arcu auctor lectus venenatis, sit amet semper lorem sollicitudin. In volutpat lorem eget ligula lacinia pulvinar. Integer sem libero, blandit sed massa sit amet, mattis euismod ligula. Donec quis tellus sem. Morbi maximus pulvinar ultrices. Maecenas vitae ultricies nunc, a rhoncus est. Vestibulum efficitur velit risus, id pharetra justo dapibus et. Nullam ut est in magna eleifend luctus sed ac lorem. Pellentesque eleifend tellus vel turpis egestas fermentum. Vivamus mattis sollicitudin tortor ut facilisis. In tincidunt, sem sed lacinia dignissim, nisi ex semper dui, semper euismod tellus lacus eget tellus. Pellentesque elementum, neque vehicula euismod commodo, nisl lorem ultricies eros, et tempus dolor urna nec ligula. Fusce ultricies neque et nisi consectetur volutpat eu sit amet ex. Sed pulvinar lorem sit amet tincidunt cursus. Nulla id faucibus erat.',
      },
      {
        id: 4,
        name: 'Martin Victory4',
        date: 'Enero 2019',
        img: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed scelerisque lectus. Aenean mollis arcu auctor lectus venenatis, sit amet semper lorem sollicitudin. In volutpat lorem eget ligula lacinia pulvinar. Integer sem libero, blandit sed massa sit amet, mattis euismod ligula. Donec quis tellus sem. Morbi maximus pulvinar ultrices. Maecenas vitae ultricies nunc, a rhoncus est. Vestibulum efficitur velit risus, id pharetra justo dapibus et. Nullam ut est in magna eleifend luctus sed ac lorem. Pellentesque eleifend tellus vel turpis egestas fermentum. Vivamus mattis sollicitudin tortor ut facilisis. In tincidunt, sem sed lacinia dignissim, nisi ex semper dui, semper euismod tellus lacus eget tellus. Pellentesque elementum, neque vehicula euismod commodo, nisl lorem ultricies eros, et tempus dolor urna nec ligula. Fusce ultricies neque et nisi consectetur volutpat eu sit amet ex. Sed pulvinar lorem sit amet tincidunt cursus. Nulla id faucibus erat.',
      },
      {
        id: 5,
        name: 'Martin Victory5',
        date: 'Enero 2019',
        img: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed scelerisque lectus. Aenean mollis arcu auctor lectus venenatis, sit amet semper lorem sollicitudin. In volutpat lorem eget ligula lacinia pulvinar. Integer sem libero, blandit sed massa sit amet, mattis euismod ligula. Donec quis tellus sem. Morbi maximus pulvinar ultrices. Maecenas vitae ultricies nunc, a rhoncus est. Vestibulum efficitur velit risus, id pharetra justo dapibus et. Nullam ut est in magna eleifend luctus sed ac lorem. Pellentesque eleifend tellus vel turpis egestas fermentum. Vivamus mattis sollicitudin tortor ut facilisis. In tincidunt, sem sed lacinia dignissim, nisi ex semper dui, semper euismod tellus lacus eget tellus. Pellentesque elementum, neque vehicula euismod commodo, nisl lorem ultricies eros, et tempus dolor urna nec ligula. Fusce ultricies neque et nisi consectetur volutpat eu sit amet ex. Sed pulvinar lorem sit amet tincidunt cursus. Nulla id faucibus erat.',
      },
    ];

    return (
      <View style={styles.reviewsContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => { navigation.goBack(); }}
          >
            <Ionicons name="ios-close" size={25} />
          </TouchableOpacity>
        </View>
        <ReviewsList reviews={reviewsList} />
      </View>
    );
  }
}
