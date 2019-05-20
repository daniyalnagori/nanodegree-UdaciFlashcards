import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'native-base'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import NewDeck from './components/NewDeck'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import NewCard from './components/NewCard'


export default class App extends React.Component {
  render() {
    const Tabs = TabNavigator({
      Home: {
        screen: DeckList,
        navigationOptions: {
          tabBarLabel: 'Deck List'
        }
      },
      NewDeck: {
        screen: NewDeck,
        navigationOptions: {
          tabBarLabel: 'New Deck'
        }
      }
    }, {
      navigationOptions: {
        header: null
      }
      })

    const MainNavigator = StackNavigator({
      Home: {
        screen: Tabs
      },
      DeckView: {
        screen: DeckView
      },
      NewCard: {
        screen: NewCard,
        navigationOptions: {
          title: 'New Card'
        }
      }
    })
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{ flex: 1, paddingTop: 22}}>
        <MainNavigator />
        </View>
      </Provider>
    )
  }
}


