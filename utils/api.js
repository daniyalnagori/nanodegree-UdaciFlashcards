import { AsyncStorage } from 'react-native'
import { formatDeckResults, APP_KEY } from './data'

export function getDecks () {
    return AsyncStorage.getItem(APP_KEY)
    .then(formatDeckResults)
}

export function getDeck(id) {
    return AsyncStorage.getItem(APP_KEY)
        .then(formatDeckResults)
        .then((result) => result[id])
}

export function saveDeck(key, deck) {
    return AsyncStorage.mergeItem(APP_KEY, JSON.stringify({
        [key]: deck
    }))
}