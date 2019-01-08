import React, { Component } from 'react';
import {
  View, FlatList, SegmentedControlIOS, StyleSheet,
} from 'react-native';

import AppointmentListItem from '../../Components/AppointmentListItem/AppointmentListItem';

const styles = StyleSheet.create({
  switchControl: {
    padding: 20,
  },
});

export default class Appointments extends Component {
  static navigationOptions = {
    title: 'Citas',
    headerStyle: {
      backgroundColor: '#26B99A',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  };

  state = {
    selectedTab: 0,
    data: [
      {
        id: 1,
        name: 'Martin Victory',
        status: 'Pennding',
        img: '',
        serviceType: 'Carpintero',
        date: '23/05/2019',
      },
      {
        id: 2,
        name: 'Martin Victory 2',
        status: 'Canceled',
        img: '',
        serviceType: 'Pintor',
        date: '23/05/2019',
      },
      {
        id: 3,
        name: 'Martin Victory 3',
        status: 'Confirmed',
        img: '',
        serviceType: 'Electricista',
        date: '23/05/2019',
      },
      {
        id: 4,
        name: 'Martin Victory 4',
        status: 'Done',
        img: '',
        serviceType: 'Plomero',
        date: '23/05/2019',
      },
    ],
  };

  switchTabHandler = (event) => {
    this.setState({ selectedTab: event.nativeEvent.selectedSegmentIndex });
  }

  renderAppointmentItem = ({ item }) => <AppointmentListItem item={item} />;

  render() {
    const { selectedTab, data } = this.state;

    return (
      <View>
        <View style={styles.switchControl}>
          <SegmentedControlIOS
            values={['Pendientes', 'Completadas']}
            tintColor="#26B99A"
            onChange={this.switchTabHandler}
            selectedIndex={selectedTab}
          />
        </View>
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderAppointmentItem}
          />
        </View>
      </View>
    );
  }
}
