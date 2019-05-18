import { AsyncStorage } from 'react-native'
export const APP_KEY = 'UdaciFlashcards'

export const data = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

function initialize() {
    AsyncStorage.setItem(APP_KEY, JSON.stringify(data))
    return data
}

export function formatDeckResults(results) {
    return results === null ? initialize() : JSON.parse(results)
}