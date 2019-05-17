import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'

export default class App extends React.Component {
  render() {
    return (
        // <DeckList />
        <DeckView />
    );
  }
}

