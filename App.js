import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      headerShown: false
    }),
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'AdMob Implementation',
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerStyle:{'backgroundColor': '#2c82c9'},
      headerTintColor: '#ffffff',
      headerLeft: null
    }),
  },
}, {
  headerMode: 'screen'
});

const App = createAppContainer(MainNavigator);

export default App;
