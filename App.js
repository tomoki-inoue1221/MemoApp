import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const App = createStackNavigator({
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'MEMOT',
    headerTintColor: '#FFF',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366',
    },
  },
});

export default createAppContainer(App);
