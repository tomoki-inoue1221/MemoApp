import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  // eslint-disable-next-line
  handlePress() {
    const { params } = this.props.navigation.state;
    console.log('press');
    const db = firebase.firestore();
    db.collection(`users/${params.currentUser.user.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    }).then(() => {
      console.log(params.currentUser.user.uid);
      console.log('success');
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <CircleButton onPress={this.handlePress.bind(this)} name="check" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default MemoCreateScreen;
