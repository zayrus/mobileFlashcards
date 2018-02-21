import { saveDeck, addCardToDeck } from '../utils/api'

export const FETCH_DECKS = 'FETCH_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function fetchDecks(decks) {
  return {
    type: FETCH_DECKS,
    decks,
  }
}

export const addNewDeck = (title) => dispatch => (
  saveDeck(title)
    .then(() => dispatch({
      type: ADD_DECK,
      title
    }))
)

export const addCard = (title, card) =>  dispatch=> (
  addCardToDeck(title, card)
    .then(() => {
      dispatch({
        type: ADD_CARD,
        title,
        card
      })
    })
)