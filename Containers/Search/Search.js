import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import SearchList from '../../Components/SearchList/SearchList';

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#F7F7F7',
    flex: 1,
  },
});

export default class Search extends Component {
  state = {
    searchItems: [
      {
        id: 1,
        name: 'Martin Victory',
      },
      {
        id: 2,
        name: 'Martin Victory 2',
      },
      {
        id: 3,
        name: 'Martin Victory 3',
      },
      {
        id: 4,
        name: 'Martin Victory 4',
      },
      {
        id: 5,
        name: 'Martin Victory 5',
      },
      {
        id: 6,
        name: 'Martin Victory 6',
      },
      {
        id: 7,
        name: 'Martin Victory 7',
      },
      {
        id: 8,
        name: 'Martin Victory 8',
      },
      {
        id: 9,
        name: 'Martin Victory 9',
      },
    ],
  };

  render() {
    const { searchItems } = this.state;
    return (
      <View style={styles.sectionContainer}>
        <SearchList searchItems={searchItems} />
      </View>
    );
  }
}
