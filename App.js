import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/components/AppBar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        {/* <MemoListScreen /> */}
        {/* <MemoDetailScreen /> */}
        {/* <MemoEditScreen /> */}
        {/* <LoginScreen /> */}
        <SignUpScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
