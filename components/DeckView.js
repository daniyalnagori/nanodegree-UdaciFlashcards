import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deckTitle } = navigation.state.params

        return {
            title: deckTitle
        }
    }
    render() {
        const { decks } = this.props
        const { deckTitle } = this.props.navigation.state.params
        const deck = decks[deckTitle]
        return (
            <View style={style.container}>
                <Text style={style.mainHeading}>{deck.title}</Text>
                <Text style={style.subHeading}>{deck.questions.length} cards</Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('NewCard', { deckTitle: deck.title })}>
                    <View style={style.btn}>
                        <Text style={style.buttonText}>Add Card</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('QuizView', { deckTitle: deck.title })}>
                    <View style={[style.btn, { marginTop: 10 }]}>
                        <Text style={style.buttonText}>Start Quiz</Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainHeading: {
        fontSize: 35,
    },
    subHeading: {
        fontSize: 25,
        color: 'grey'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    btn: {
        marginTop: 50,
        backgroundColor: 'blue',
        borderRadius: 5
    }
})

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckView)