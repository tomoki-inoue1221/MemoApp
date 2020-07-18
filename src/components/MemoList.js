import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const dateString = (date) => {
  const dateStr = date.toDate().toISOString();
  return dateStr.split('T')[0];
};

class MemoList extends React.Component {
  renderMemo({ item }) {
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body}</Text>
          <Text style={styles.memoDate}>{ item.createdOn ? dateString(item.createdOn) : ''}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FFFDF6',
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    paddingBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
