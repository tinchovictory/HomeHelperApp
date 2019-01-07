import { createStackNavigator } from 'react-navigation';

import Search from '../../Containers/Search/Search';
import Profile from '../../Containers/Profile/Profile';

const SearchStackNavigator = createStackNavigator({
  SearchScreen: {
    screen: Search,
  },
  ProfileScreen: {
    screen: Profile,
  },
},
{
  headerMode: 'screen',
});

SearchStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default SearchStackNavigator;
