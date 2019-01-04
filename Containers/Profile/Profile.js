import React, { Component } from 'react';
import {
  ScrollView, StyleSheet,
} from 'react-native';

import Description from '../../Components/Description/Description';
import SectionDivider from '../../Components/SectionDivider/SectionDivider';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 20,
  },
});

export default class Profile extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#26B99A',
    },
    headerTintColor: '#fff',
  }

  state = {};

  render() {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed scelerisque lectus. Aenean mollis arcu auctor lectus venenatis, sit amet semper lorem sollicitudin. In volutpat lorem eget ligula lacinia pulvinar. Integer sem libero, blandit sed massa sit amet, mattis euismod ligula. Donec quis tellus sem. Morbi maximus pulvinar ultrices. Maecenas vitae ultricies nunc, a rhoncus est. Vestibulum efficitur velit risus, id pharetra justo dapibus et. Nullam ut est in magna eleifend luctus sed ac lorem. Pellentesque eleifend tellus vel turpis egestas fermentum. Vivamus mattis sollicitudin tortor ut facilisis. In tincidunt, sem sed lacinia dignissim, nisi ex semper dui, semper euismod tellus lacus eget tellus. Pellentesque elementum, neque vehicula euismod commodo, nisl lorem ultricies eros, et tempus dolor urna nec ligula. Fusce ultricies neque et nisi consectetur volutpat eu sit amet ex. Sed pulvinar lorem sit amet tincidunt cursus. Nulla id faucibus erat.';

    return (
      <ScrollView style={styles.profileContainer}>
        <Description
          text={loremIpsum}
          initialLength={300}
        />
        <SectionDivider />
        <ServicesSection />
      </ScrollView>
    );
  }
}
