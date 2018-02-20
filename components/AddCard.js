import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { addCardToDeck } from '../utils/api'
import {white, grey, black, lightBlack } from '../utils/colors'

export default class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    addCardToDeck(
      this.props.navigation.state.params.deckTitle,
      this.state.question,
      this.state.answer
    )
    this.props.navigation.goBack()
  }

  addQuestion = questionInput => this.setState({ question: questionInput })

  addAnswer = answerInput => this.setState({ answer: answerInput })

  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <TextInput
          style={styles.textInputBox}
          value={question}
          placeholder='Write a question'
          multiline={true}
          editable={true}
          numberOfLines={4}
          placeholder="Your Question"
          onChangeText={question => this.addQuestion(question)}
        />
        <TextInput
          style={styles.textInputBox}
          value={answer}
          placeholder='Write answer'
          multiline={true}
          editable={true}
          numberOfLines={6}
          placeholder="Your Answer"
          onChangeText={answer => this.addAnswer(answer)}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.submitButton}>
            <Text style={[styles.buttonText]}>Submit</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignContent:'center',
    justifyContent: 'space-around',
  },

  textInputBox: {
    padding: 20,
    margin: 10,
    borderColor: black,
    borderRadius: 5,
    borderWidth: 1.0,

  },

  inputContainer: {
    backgroundColor: grey
  },

  submitButton: {
    padding: 20,
    margin: 120,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
    borderColor: lightBlack,
    borderWidth: 0.5,
    backgroundColor: black,
  },

  buttonText: {
    textAlign: 'center',
    color: white,
    fontSize: 16,
  },

})
