import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { black, white, lightBlack } from '../utils/colors'
import { saveDeck } from '../utils/api'

class NewDeck extends React.Component {
  state = { deckName: '' }

  submit = () => {
    saveDeck(this.state.deckName);
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <TextInput
          style={[styles.textInputBox]}
          placeholder='Deck title'
          value={this.state.deckName}
          onChangeText={(deckName) => this.setState({deckName})}
          multiline={false}
        />
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
    justifyContent:'space-around',
    alignContent:'center',
    flex:1
  },

  textInputBox:{
    padding: 20,
    margin: 10,
    borderColor: black,
    borderRadius: 5,
    borderWidth: 1.0,
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

export default NewDeck;
