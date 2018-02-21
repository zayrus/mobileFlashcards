
import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'
import { getDecks } from '../utils/api'
import { grey, white } from '../utils/colors'

class ListDeck extends Component {

  state = {
    isReady: false,
  }

  componentDidMount() {
    this.updateDecks()
  }

  updateDecks = () => {
    getDecks()
      .then(res => {
        this.props.dispatch(fetchDecks(res))
        this.setState({
          isReady:true
        })
      })
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          this.props.navigation.navigate('ItemDeck', item)}>
          <Text style={styles.deck} >{item.title}</Text>
          <Text style={styles.cardQty} >{item.questions.length} Cards</Text>
      </TouchableOpacity>
    )
  }

  renderItemSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: grey
      }}
    />
  )

  render() {
    const { decks, navigation } = this.props
    const { isReady } = this.state

    if (!decks)
      return (
        <View>
          <Text>There are no decks. Touch here to create one!</Text>
        </View>
      )

    return (
      <View>
        <FlatList
          data={Object.values(this.props.decks)}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderItemSeparator}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
      decks: state,
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

export default connect(mapStateToProps)(ListDeck)
