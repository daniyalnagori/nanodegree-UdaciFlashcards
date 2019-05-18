import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'native-base'
import { TabNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import NewDeck from './components/NewDeck'


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
    })
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <Tabs />
      </View>
    )
  }
}


