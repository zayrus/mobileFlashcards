import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { black, white, lightBlack } from '../utils/colors'
import { saveDeck } from '../utils/api'
import { addNewDeck } from '../actions'

class NewDeck extends Component {
  state = { title: '' }

  submit = () => {
    const { title } = this.state

    if (title === '') {
        alert('Please fill Deck title field')
        return
    }
    this.props.dispatch(addNewDeck(this.state.title))
    this.setState({
      title:''
    })
    this.props.navigation.navigate('ItemDeck', { title })
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <View style={styles.inputContainer}>
          <TextInput
          style={[styles.textInputBox]}
          placeholder='Deck title'
          value={this.state.title}
          onChangeText={(title) => this.setState({title})}
          multiline={false}
          />
        </View>
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.submitButton}>
            <Text style={[styles.buttonText]}>Submit</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 40,
    justifyContent:'space-around',
    alignContent:'center',
    flex:1
  },

  textInputBox:{
    padding: 20,
    borderColor: black,
    borderRadius: 5,
    borderWidth: 1.0,
  },

  inputContainer: {
    backgroundColor: white
  },

  header:{
    fontSize:60,
    textAlign:'center'
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

export default connect()(NewDeck)
