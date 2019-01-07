import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import SearchList from '../../Components/SearchList/SearchList';
import SearchHeader from '../../Components/SearchHeader/SearchHeader';

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#F7F7F7',
    flex: 1,
  },
});

export default class Search extends Component {
  static navigationOptions = {
    title: 'Search',
    headerStyle: {
      backgroundColor: '#26B99A',
    },
    header: null,
  }

  state = {
    searchItems: [
      {
        id: 1,
        name: 'Martin Victory',
        serviceTypes: ['Carpintero', 'Pintor'],
        score: 4,
        location: 'Belgrano',
      },
      {
        id: 2,
        name: 'Martin Victory 2',
        serviceTypes: ['Carpintero', 'Pintor'],
        score: 4,
        location: 'Pal',
      },
      {
        id: 3,
        name: 'Martin Victory 3',
        serviceTypes: ['Carpintero', 'Pintor'],
        score: 4,
        location: 'Palermo',
      },
      {
        id: 4,
        name: 'Martin Victory 4',
        serviceTypes: ['Carpintero', 'Pintor'],
        score: 4,
        location: 'Belgrano',
      },
      {
        id: 5,
        name: 'Martin Victory 5',
        serviceTypes: ['Carpintero', 'Pintor'],
        score: 4,
        location: 'Olivos',
      },
      {
        id: 6,
        name: 'Martin Victory 6',
        serviceTypes: ['Carpintero', 'Pintor'],
        score: 4,
        location: 'Palermo',
      },
      {
        id: 7,
        name: 'Martin Victory 7',
        serviceTypes: ['Carpintero', 'Pintor'],
        score: 4,
        location: 'Belgrano',
      },
      {
        id: 8,
        name: 'Martin Victory 8',
        serviceTypes: ['Carpintero', 'Pintor'],
        score: 4,
        location: 'Recoleta',
      },
      {
        id: 9,
        name: 'Martin Victory 9',
        serviceTypes: ['Carpintero', 'Pintor'],
        score: 4,
        location: 'Olivos',
      },
    ],
    scrollY: new Animated.Value(0),
    serviceType: '',
    location: '',
  };

  searchListRef = React.createRef();

  handleScrollTopList = () => {
    this.searchListRef.scrollToOffset({ animated: true, offset: 0 });
  }

  handleLocationChange = (text) => {
    this.setState({ location: text });
  }

  handleServiceTypeChange = (text) => {
    this.setState({ serviceType: text });
  }

  render() {
    const {
      searchItems, scrollY, location, serviceType,
    } = this.state;
    const { navigation } = this.props;

    let filteredItems = searchItems;
    if (serviceType !== '') {
      filteredItems = filteredItems.filter(({ serviceTypes }) => {
        const containsSt = serviceTypes.filter(st => st.includes(serviceType));
        return containsSt.length > 0;
      });
    }
    if (location !== '') {
      filteredItems = filteredItems.filter(item => item.location.includes(location));
    }

    return (
      <View style={styles.sectionContainer}>
        <SearchList
          searchItems={filteredItems}
          navigation={navigation}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          )}
          listRef={(elem) => { this.searchListRef = elem; }}
        />
        <SearchHeader
          scrollY={scrollY}
          scrollTopList={this.handleScrollTopList}
          handleServiceTypeChange={this.handleServiceTypeChange}
          handleLocationChange={this.handleLocationChange}
        />
      </View>
    );
  }
}
