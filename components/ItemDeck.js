import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { getDeck } from '../utils/api'
import { black, white, grey } from '../utils/colors'

export default class ItemDeck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    if (!deck) return { title: 'DeckTitle' };
    return { title: deck.title };
  };

  onAddCard = () => {
    const { deck } = this.props.navigation.state.params;
    this.props.navigation.navigate('AddCard', {
      deckTitle: deck.title
    });
  };

  onStartQuiz = () => {
    const { deck } = this.props.navigation.state.params;
    this.props.navigation.navigate('QuizView', { deck: deck });
  };

  render() {
    const { deck } = this.props.navigation.state.params;

    if (!deck)
      return (
        <View>
          <Text>No deck!</Text>
        </View>
      );

    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{deck.title}</Text>
        <Text style={styles.smallText}>{deck.questions.length} cards</Text>
        <TouchableOpacity style={styles.addButton} onPress={this.onAddCard}>
          <Text style={styles.addButtonText} >Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startButton} onPress={this.onStartQuiz}>
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
  const decks = state.decks
  return { decks }
}
