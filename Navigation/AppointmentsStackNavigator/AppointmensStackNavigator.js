import { createStackNavigator } from 'react-navigation';

import Appointments from '../../Containers/Appointments/Appointments';

const SearchStackNavigator = createStackNavigator({
  AppointmentsScreen: {
    screen: Appointments,
  },
},
{
  headerMode: 'screen',
});

export default SearchStackNavigator;
