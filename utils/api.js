import {AsyncStorage} from 'react-native'
const CARDS_STORAGE_KEY = 'MobileFlashcards:decks';

export const saveDeck = deckTitle =>
  AsyncStorage.mergeItem(
    CARDS_STORAGE_KEY,
    JSON.stringify({ [deckTitle]: { title: deckTitle, questions: [] } })
  )

export const getDecks = () => {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
      .then(list => JSON.parse(list))
}

export const addCardToDeck = (deckTitle, question, answer) => {
    const deck = getDeck(deckTitle).then(res => {
      const updatedQuestions = res.questions.concat([
        {
          question: question,
          answer: answer
        }
      ])
      AsyncStorage.mergeItem(
        CARDS_STORAGE_KEY,
        JSON.stringify({
          [deckTitle]: { title: deckTitle, questions: updatedQuestions }
        })
      )
    })
  }