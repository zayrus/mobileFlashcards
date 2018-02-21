import {AsyncStorage} from 'react-native'
const CARDS_STORAGE_KEY = 'MobileFlashcards:decks'

export const saveDeck = deckTitle =>
  AsyncStorage.mergeItem(
    CARDS_STORAGE_KEY,
    JSON.stringify({ [deckTitle]: { title: deckTitle, questions: [] } })
  )

export const getDecks = () => {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(list => JSON.parse(list))
}

export function getDeck (title) {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(results => {
      const decks = JSON.parse(results);
      return decks[title]
    });
}

export function addCardToDeck (title, card) {
  return getDeck(title)
    .then(result =>  result)
    .then(deck => {
      const { question, answer } = card;
      const newQuestions = deck.questions.concat({
        question,
        answer,
      });

      AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title,
          questions: newQuestions
        }
      }))
    })
}