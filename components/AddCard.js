import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { addCard } from '../utils/api'
import {white, grey } from '../utils/colors'

export default class AddCard extends React.Component {
  state = {
    questionText: 'Write question',
    answerText: 'Write answer'
  };

  submit = () => {
    addCard(
      this.props.navigation.state.params.deckTitle,
      this.state.questionText,
      this.state.answerText
    )
    this.props.navigation.return()
  }

  changeQuestionText = text => this.setState({ questionText: text })

  changeAnswerText = text => this.setState({ answerText: text })

  render() {
    const { questionText, answerText } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						value={questionText}
						multiline={true}
						editable={true}
						numberOfLines={4}
						placeholder="Your Question"
						onChangeText={text => this.changeQuestionText(text)}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						value={answerText}
						multiline={true}
						editable={true}
						numberOfLines={6}
						placeholder="Your Answer"
						onChangeText={text => this.changeAnswerText(text)}
					/>
				</View>
        <TouchableOpacity onPress={this.submit}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: white,
    justifyContent: 'space-around',
  },
  input: {
    fontSize: 16,
    padding: 20,
    color: white
  },
  inputContainer: {
    backgroundColor: grey
  }
})