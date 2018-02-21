import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { green, red, white, purple } from '../utils/colors'

export default class Quiz extends Component {

  state = {
    currentIndex: 0,
    mode: 'question',
    correctAnswers: 0,
    currentQuestion: '',
    currentAnswer: ''
  }
  
  componentDidMount() {
    const deck  = this.props.navigation.state.params
    this.setState({
      currentQuestion: deck.questions[0].question,
      currentAnswer: deck.questions[0].answer
    })
  }

  toggleMode = () => {
    this.state.mode === 'question'
      ? this.setState({ mode: 'answer' })
      : this.setState({ mode: 'question' })
  }

  onIncorrect = () => {
    const deck = this.props.navigation.state.params
    questionsCount = deck.questions.length
    nextIndex = this.state.currentIndex + 1
    if (nextIndex >= questionsCount) {
      this.props.navigation.navigate('QuizStats', {
        questionsCount: questionsCount,
        correctCount: this.state.correctAnswers + 1
      })
    } else {
      this.setState({
        currentIndex: nextIndex,
        currentAnswer: deck.questions[nextIndex].answer,
        currentQuestion: deck.questions[nextIndex].question
      })
    }
  }

  onCorrect = () => {
    const correctCount = this.state.correctAnswers + 1
    this.setState({ correctAnswers: correctCount })
    this.onIncorrect()
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:white}}>
        {this.state.mode === 'question' ? (
          <Text>{this.state.currentQuestion}</Text>
        ) : (
          <Text>{this.state.currentAnswer}</Text>
        )}
        
        <TouchableOpacity onPress={this.toggleMode} >
          <Text>{this.state.mode === 'question' ? 'Answer' : 'Question'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.onCorrect}>
          <Text>Correct</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.onIncorrect}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center'
  }
})

