import React from 'react';
import {
  View, FlatList, StyleSheet, Image, Text,
} from 'react-native';
import PropTypes from 'prop-types';

import SearchListItem from './SearchListItem/SearchListItem';
import { HEADER_MAX_HEIGHT } from '../SearchHeader/SearchHeader';
import noResultsImg from '../../assets/NoResults.png';

const styles = StyleSheet.create({
  searchList: {
    flex: 1,
  },
  listContentContainer: {
    paddingTop: HEADER_MAX_HEIGHT,
  },
  noElemsContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  noElemsImg: {
    resizeMode: 'contain',
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  noElemsText: {
    fontStyle: 'italic',
    color: '#444',
  },
});

const SearchList = (props) => {
  const {
    searchItems, navigation, onScroll, listRef,
  } = props;

  let noElems = null;
  if (searchItems.length === 0) {
    noElems = (
      <View style={styles.noElemsContainer}>
        <Image style={styles.noElemsImg} source={noResultsImg} />
        <Text style={styles.noElemsText}>No hay resultados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.searchListContainer}>
      <FlatList
        styles={styles.searchList}
        data={searchItems}
        renderItem={({ item }) => (
          <SearchListItem
            name={item.name}
            navigation={navigation}
            serviceTypes={item.serviceTypes}
            score={item.score}
          />
        )}
        keyExtractor={item => item.id.toString()}
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContentContainer}
        ref={listRef}
      />
      {noElems}
    </View>
  );
};

SearchList.propTypes = {
  searchItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onScroll: PropTypes.func.isRequired,
  listRef: PropTypes.func.isRequired,
};

export default SearchList;
