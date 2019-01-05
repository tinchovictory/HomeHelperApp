import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Description from '../Description/Description';
import ServicesList from '../ServicesList/ServicesList';

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default class ServicesSection extends Component {
  static propTypes = {
    servicesList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
  }

  state = {
    active: 1,
  };

  onPressItem = (itemId) => {
    this.setState({ active: itemId });
  }

  render() {
    const { servicesList } = this.props;
    const { active } = this.state;
    const descriptionText = servicesList.filter(item => item.id === active)[0].description;

    return (
      <View>
        <Text style={styles.sectionTitle}>Servicios</Text>
        <ServicesList
          servicesList={servicesList}
          active={active}
          onPressItem={this.onPressItem}
        />
        <Description
          text={descriptionText}
          initialLength={150}
        />
      </View>
    );
  }
}
