import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SearchStackNavigator from '../SearchStackNavigatior/SearchStackNavigator';
import AppointmentsStackNavigator from '../AppointmentsStackNavigator/AppointmensStackNavigator';

import Messages from '../../Containers/Messages/Messages';
import Settings from '../../Containers/Settings/Settings';

const TabNavigator = createBottomTabNavigator(
  {
    Search: SearchStackNavigator,
    Appointments: AppointmentsStackNavigator,
    Messages,
    Settings,
  },
  {
    tabBarOptions: {
      activeTintColor: '#26B99A',
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Ionicons;
        let iconName;

        if (routeName === 'Search') {
          iconName = 'ios-search';
        } else if (routeName === 'Appointments') {
          iconName = 'ios-list';
        } else if (routeName === 'Messages') {
          iconName = 'ios-chatbubbles';
        } else if (routeName === 'Settings') {
          iconName = 'ios-settings';
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    // eslint-disable-next-line prettier/prettier
  },
);

export default TabNavigator;
