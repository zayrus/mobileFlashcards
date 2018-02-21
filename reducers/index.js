import * as actions from '../actions'

export default function decks(state={}, action) {
  switch (action.type) {
    case actions.FETCH_DECKS:
      return {
        ...state,
        ...action.decks
      }
      break
    case actions.ADD_DECK:
      const { title } = action
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      }
    break
  case actions.ADD_CARD:
    const newState = {...state}
    newState[action.title].questions.push(action.card)
    return newState
  break
  default:
    return state
  }
}