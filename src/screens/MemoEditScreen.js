import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ body: params.memo.body, key: params.memo.key });
  }

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const newDate = firebase.firestore.Timestamp.now();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key).update({
      body: this.state.body,
      createdOn: newDate,
    })
      .then(() => {
        const { navigation } = this.props;
        console.log(navigation);
        navigation.state.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createdOn: newDate,
        });
        navigation.goBack();
      })
      .catch((error) => {
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

export default MemoEditScreen;
