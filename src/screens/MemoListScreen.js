import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  handlePress() {
    const { params } = this.props.navigation.state;
    console.log(params);
    this.props.navigation.navigate('MemoCreate', { currentUser: params.currentUser });
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)} name="plus" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default MemoListScreen;
