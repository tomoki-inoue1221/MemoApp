import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    }).then(() => {
      this.props.navigation.goBack();
    }).catch(() => {
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
          textAlignVertical="top"
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
