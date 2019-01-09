import React, { Component } from 'react';
import {
  View, FlatList, SegmentedControlIOS, StyleSheet,
} from 'react-native';

import AppointmentListItem from '../../Components/AppointmentListItem/AppointmentListItem';

const styles = StyleSheet.create({
  switchControl: {
    padding: 20,
  },
  listContainer: {
    height: '100%',
    width: '100%',
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
        status: 'Pending',
        img: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image',
        serviceType: 'Carpintero',
        date: '23/05/2019',
      },
      {
        id: 2,
        name: 'Martin Victory 2',
        status: 'Canceled',
        img: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image',
        serviceType: 'Pintor',
        date: '23/05/2019',
      },
      {
        id: 3,
        name: 'Martin Victory 3',
        status: 'Confirmed',
        img: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image',
        serviceType: 'Electricista',
        date: '23/05/2019',
      },
      {
        id: 4,
        name: 'Martin Victory 4',
        status: 'Done',
        img: 'http://pawserver.it.itba.edu.ar/paw-2018a-4/api/users/15/image',
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

    let filteredItems = data;
    if (selectedTab === 0) { // show pending and confifmed
      filteredItems = data.filter(({ status }) => status === 'Pending' || status === 'Confirmed');
    } else if (selectedTab === 1) { // show done and canceled
      filteredItems = data.filter(({ status }) => status === 'Canceled' || status === 'Done');
    }

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
        <View style={styles.listContainer}>
          <FlatList
            data={filteredItems}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderAppointmentItem}
            style={styles.list}
          />
        </View>
      </View>
    );
  }
}
