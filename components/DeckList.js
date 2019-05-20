import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import Deck from './Deck'

class DeckList extends Component {
    componentDidMount() {
        this.willFocus = this.props.navigation.addListener('willFocus', () => {
            getDecks().then((res) => {
                this.props.dispatch(receiveDecks(res))
            })
        })
    }
    componentWillUnmount() {
        this.willFocus.remove();
    }
    render() {
        const { decks } = this.props

        return (
            <ScrollView>
                {decks ? Object.keys(decks).map((title) => (
                    <Deck deckTitle={title} navigation={this.props.navigation} key={title} />
                )) : <View></View>}
            </ScrollView>
        )
    }
}

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)