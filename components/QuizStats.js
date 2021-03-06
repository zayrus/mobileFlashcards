import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { black, white, lightBlack } from '../utils/colors'

export default class QuizStats extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz stats'
    }
  }
  render() {
    const { questionsCount, correctCount, title, questions } = this.props.navigation.state.params
    return (
      <View style={styles.content}>
        <Text style={styles.answer}>Quiz Stats!</Text>
        <Text style={styles.result}>You correctly answered: {correctCount} of { questionsCount } answers!</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Quiz', {title, questions})}
        >
          <View style={styles.deckButton}>
            <Text style={[styles.deckButtonText]}>Restart quiz</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ItemDeck', {title, questions})}
        >
          <View style={styles.deckButton}>
            <Text style={[styles.deckButtonText]}>Deck</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'flex-start',
    alignItems:'center'
  },

  answer:{
    fontSize:35,
    margin:30,
    textAlign:'center',
    textAlignVertical:'center'
  },

  result:{
    fontSize:25,
    margin:30,
    textAlign:'center',
    textAlignVertical:'center'
  },

  deckButton: {
    padding: 20,
    margin: 120,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
    borderColor: lightBlack,
    borderWidth: 0.5,
    backgroundColor: black,
  },

  deckButtonText: {
    textAlign: 'center',
    color: white,
    fontSize: 16,
  },

})

