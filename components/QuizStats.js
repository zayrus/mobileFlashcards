import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class QuizStats extends Component {
  render() {
    const { questionsCount, correctCount } = this.props.navigation.state.params
    const percentageCorrect = correctCount / questionsCount * 100
    return (
      <View>
        <Text>Quiz Stats!</Text>
        <Text>Your result: {percentageCorrect} % of correct answers!</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text>Deck List</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
