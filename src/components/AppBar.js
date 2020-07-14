import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>MEMOT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3.0,
    zIndex: 10,
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 24,
  },
});

export default AppBar;
