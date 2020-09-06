import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant',
    cardStyle: { backgroundColor: '#FFF' }
  }
  
});

export default createAppContainer(navigator);
// Client ID PnemBbJTYsSWFfxWRUKOBw
// API Key Va9UPByZhtuWGw7J-qLdq1r6fpGFE2W_iy85lHDNxXPRArs3szWlIAA72xiM3AyJaOp707dZ06OnRJG0J1AsLsCxSS1Yydbo8BtQpvnr-kKr2rYw-TbClD4Rgt9OX3Yx