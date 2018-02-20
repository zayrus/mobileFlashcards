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
