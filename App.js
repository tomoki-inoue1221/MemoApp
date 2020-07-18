import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';
import env from './env.json';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

require('firebase/firestore');

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DB_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE,
  messagingSenderId: env.FIREBASE_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

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
