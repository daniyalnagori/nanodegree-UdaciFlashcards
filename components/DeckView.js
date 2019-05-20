import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert, TouchableHighlight } from 'react-native'
import { getDeck } from '../utils/api'

class DeckView extends Component {
    state = {
        deck: null
    }
    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params

        return {
            title: `${deck.title}`
        }
    }
    // componentDidMount(){
    //     getDeck('JavaScript').then((res) => {
    //         this.setState({
    //             deck: res
    //         }) 
    //     })
    // }
    render() {
        // const { deck } = this.state
        const { deck } = this.props.navigation.state.params
        return (
            <View style={style.container}>
                <Text style={style.mainHeading}>{deck.title}</Text>
                <Text style={style.subHeading}>{deck.questions.length} cards</Text>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('NewCard', { deckTitle: deck.title })}>
                    <View style={style.btn}>
                        <Text style={style.buttonText}>Add Card</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    Alert.alert('You tapped the button!');
                }}>
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

export default DeckView