import { createStackNavigator } from 'react-navigation';

import TabNavigator from '../TabNavigator/TabNavigator';

const MainStackNavigator = createStackNavigator({
  MainScreen: {
    screen: TabNavigator,
  },
});

export default MainStackNavigator;
