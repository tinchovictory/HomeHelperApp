import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import SearchListItem from './SearchListItem/SearchListItem';

const styles = StyleSheet.create({
  searchList: {
    flex: 1,
  },
});

const SearchList = (props) => {
  const { searchItems, navigation } = props;

  return (
    <FlatList
      styles={styles.searchList}
      data={searchItems}
      renderItem={({ item }) => (
        <SearchListItem
          name={item.name}
          navigation={navigation}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

SearchList.propTypes = {
  searchItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default SearchList;
