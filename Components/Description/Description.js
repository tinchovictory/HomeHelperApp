import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';

const styles = StyleSheet.create({
  descriptionText: {
    color: '#444444',
    lineHeight: 20,
  },
});

export default class Description extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    initialLength: PropTypes.number.isRequired,
  };

  state = {
    showingFullText: false,
  };

  componentDidMount() {
    const { text, initialLength } = this.props;

    if (text.length <= initialLength) {
      this.showFullText();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.hideFullText();
    }
  }

  handleShowMorePress = () => {
    this.showFullText();
  }

  showFullText = () => {
    this.setState({
      showingFullText: true,
    });
  }

  hideFullText = () => {
    this.setState({
      showingFullText: false,
    });
  }

  render() {
    let { text } = this.props;
    const { initialLength } = this.props;
    const { showingFullText } = this.state;

    let showMoreBtn = (<ShowMoreBtn onPress={this.showFullText} />);

    if (showingFullText) {
      showMoreBtn = null;
    } else {
      text = `${text.substring(0, initialLength)}...`;
    }

    return (
      <View>
        <Text style={styles.descriptionText}>{text}</Text>
        { showMoreBtn }
      </View>
    );
  }
}
