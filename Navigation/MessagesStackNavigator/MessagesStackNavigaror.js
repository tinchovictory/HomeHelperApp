import { createStackNavigator } from 'react-navigation';

import Messages from '../../Containers/Messages/Messages';

const MessagesStackNavigator = createStackNavigator({
  MessagesScreen: {
    screen: Messages,
  },
},
{
  headerMode: 'screen',
});

export default MessagesStackNavigator;
