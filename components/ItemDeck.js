import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { black, white, grey } from '../utils/colors'

  class ItemDeck extends React.Component {
    static navigationOptions = ({ navigation }) => {
      const { title } = navigation.state.params
      return {
        title: title + ' details'
      }
    }
  render() {
    let {title} = this.props.navigation.state.params;
    let questions = this.props.decks[title] && this.props.decks[title].questions;
    const questLen = questions ? questions.length : 0

    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{title}</Text>
        <Text style={styles.smallText}>{questLen} cards</Text>
        <TouchableOpacity style={styles.addButton}
            onPress={() => {
              this.props.navigation.navigate('AddCard', {
                  questions,
                  title,
              });
            }}
          >
          <Text style={styles.addButtonText} >Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => {
            this.props.navigation.navigate('Quiz', {
                title,
                questions,
            });
          }}
        >
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: white,
  },
  bigText: {
    color: black,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 50,
  },
  smallText: {
    color: grey,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },

  addButton: {
    padding: 20,
    margin: 10,
    marginTop: 150,
    marginRight:  80,
    marginLeft:  80,
    borderRadius: 10,
    borderColor: '#222',
    borderWidth: 0.5,
    backgroundColor: white,
  },

  addButtonText: {
    textAlign: 'center',
    color: black,
    fontSize: 16,
  },

  startButton: {
    padding: 20,
    margin: 10,
    marginRight:  80,
    marginLeft:  80,
    borderRadius: 10,
    borderColor: '#222',
    borderWidth: 0.5,
    backgroundColor: black,
  },

  startButtonText: {
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

export default connect(mapStateToProps)(ItemDeck)
