import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
  const dateStr = date.toDate().toISOString();
  return dateStr.split('T')[0];
};

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    console.log(params.memo);
    this.setState({ memo: params.memo });
  }

  render() {
    const { memo } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>{memo.body ? memo.body.substring(0, 10) : ''}</Text>
            <Text style={styles.memoHeaderDate}>{memo.createdOn ? dateString(memo.createdOn) : ''}</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>
            {memo.body}
          </Text>
        </View>

        <CircleButton onPress={() => { this.props.navigation.navigate('MemoEdit', { memo }); }} color="white" style={styles.editButton} name="pencil" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  memoBody: {
    lineHeight: 20,
    fontSize: 16,
  },
  editButton: {
    top: 70,
  },
});

export default MemoDetailScreen;
