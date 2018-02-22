import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions'

import {white, grey, black, lightBlack } from '../utils/colors'

class AddCard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add Card'
    }
  }
  state = {
    question: '',
    answer: ''
  }
  
  submit = () => {
    const { question, answer } = this.state
    const {questions, title} = this.props.navigation.state.params

    if (question === '') {
        alert('Please fill Question field')
        return
    }

    if (answer === '') {
        alert('Please fill Answer field')
        return
    }
    const params = {questions, title, question, answer};

    this.props.dispatch(addCard(title, {question, answer}))
      .then(() => this.props.navigation.goBack())

  }

  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View>
        <View>
          <TextInput
            style={styles.textInputBox}
            value={question}
            placeholder='Write a question'
            multiline={true}
            editable={true}
            numberOfLines={4}
            placeholder="Your Question"
            onChangeText={question => this.setState({question})}
          />
        </View>
        <View>
          <TextInput
            style={styles.textInputBox}
            value={answer}
            placeholder='Write answer'
            multiline={true}
            editable={true}
            numberOfLines={6}
            placeholder="Your Answer"
            onChangeText={answer => this.setState({answer})}
          />
        </View>
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.submitButton}>
            <Text style={[styles.buttonText]}>Submit</Text>
          </View>
        </TouchableOpacity>
        </View>
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
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    marginBottom: 20,
    borderColor: black,
    borderRadius: 5,
    borderWidth: 1.0,
    textAlignVertical: 'center',
    backgroundColor: white

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

function mapStateToProps(state) {
  return {
      decks: state,
  }
}

export default connect(mapStateToProps)(AddCard)