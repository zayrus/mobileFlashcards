
import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { getDecks } from '../utils/api';
import { grey, white } from '../utils/colors';

export default class DeckListView extends React.Component {
  state = { decks: {} };

  componentDidMount() {
    this.updateDecks();
  }

  updateDecks = () => {
    getDecks()
      .then(res => {
        console.log('decks from api');
        this.setState({ decks: res })
      })
  }
  
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          this.props.navigation.navigate('ItemDeck', {
            deck: item
          });
        }}
      >
        <Text style={styles.deck} >{item.title}</Text>
        <Text style={styles.cardQty} >{item.questions.length} Cards</Text>
      </TouchableOpacity>
    );
  };

  renderItemSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: grey
      }}
    />
  );

  render() {
    const { decks } = this.state;
    console.log('decks to show ', decks);
    if (!decks)
      return (
        <View>
          <Text>There are no decks. Touch here to create one!</Text>
        </View>
      );

    const data = Object.values(decks);

    return (
      <View>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderItemSeparator}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  deck: {
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 20
  },
  cardQty: {
    fontSize: 16,
    color: grey,
    paddingTop: 20,
    paddingBottom: 20
  }
})
