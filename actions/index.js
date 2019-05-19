export const RECEIVE_DECKS = 'RECEIVE_ENTRIES'
export const STORE_DECK = 'STORE_DECK'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function storeDeck (deck) {
    return {
        type: STORE_DECK,
        deck
    }
}

