import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { green, red, white, purple } from '../utils/colors'

export default class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz'
    }
  }
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
      lenghtQuiz: deck.questions.length,
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
      <View>
        <View>
          <Text>
            { this.state.currentIndex }/{ this.state.lenghtQuiz }
          </Text>
        </View>
        <View style={styles.container}>
          {this.state.mode === 'question' ? (
            <Text style={styles.question}>{this.state.currentQuestion}</Text>
          ) : (
            <Text style={styles.question}>{this.state.currentAnswer}</Text>
          )}

          <TouchableOpacity onPress={this.toggleMode} >
            <Text style={styles.toggleText}>{this.state.mode === 'question' ? 'Answer' : 'Question'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.correctButton} onPress={this.onCorrect}>
            <Text style={styles.correct}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.incorrectButton} onPress={this.onIncorrect}>
            <Text style={styles.incorrect}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-start',
    alignItems:'center'
  },

  toggleText:{
    textAlign:"center",
    color:"gray",
    marginBottom:20,
    fontSize:10
  },

  question:{
    fontSize:35,
    margin:30,
    textAlign:'center',
    textAlignVertical:'center'
  },

  correctButton: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: '#222',
    borderWidth: 0.5,
    backgroundColor: green,
  },

  incorrectButton: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: '#222',
    borderWidth: 0.5,
    backgroundColor: red,
  },
  correct:{
    color:'white',
    fontSize:20,
  },

  incorrect:{
    color:'white',
    fontSize:20,
  },

  retakeButton:{
    marginTop:20,
    color:'darkorange'
  }

})

