import { RECEIVE_DECKS, STORE_DECK } from '../actions'

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                decks: action.decks
            }
        case STORE_DECK: 
            return {
                decks : {
                    ...state.decks,
                    [action.deck.title]: action.deck 
                }
            }
        default:
            return state
    }
}

export default decks