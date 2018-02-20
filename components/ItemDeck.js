import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { getDeck } from '../utils/api';

export default class ItemDeck extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    if (!deck) return { title: 'DeckTitle' };
    return { title: deck.title };
  };

  onAddCard = () => {
    const { deck } = this.props.navigation.state.params;
    this.props.navigation.navigate('NewQuestionView', {
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
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <TouchableOpacity onPress={this.onAddCard}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onStartQuiz}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}