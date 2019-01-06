import { createStackNavigator } from 'react-navigation';

import TabNavigator from '../TabNavigator/TabNavigator';
import Reviews from '../../Containers/Reviews/Reviews';
import ContactForm from '../../Containers/ContactFrom/ContactForm';

const MainNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
  },
  ReviewsModal: {
    screen: Reviews,
  },
  ContactForm: {
    screen: ContactForm,
  },
},
{
  mode: 'modal',
  headerMode: 'none',
});

export default MainNavigator;
