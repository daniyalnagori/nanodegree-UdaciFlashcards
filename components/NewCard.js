import React, { Component } from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { storeCardToDeck } from '../actions'
import { saveCardToDeck } from '../utils/api'


class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    handleQuesChange = (e) => {
        this.setState({
            question: e
        })
    }
    handleAnswerChange = (e) => {
        this.setState({
            answer: e
        })
    }
    onSubmit = () => {
        const { deckTitle } = this.props.navigation.state.params

        this.props.dispatch(storeCardToDeck(this.state, deckTitle))

        saveCardToDeck(deckTitle, this.state)
    }
    render() {
        return (
            <View>
                <Input
                    placeholder='Question'
                    onChangeText={this.handleQuesChange}
                />
                <Input
                    placeholder='Answer'
                    onChangeText={this.handleAnswerChange}
                />

                <Button
                    title="Submit"
                    onPress={this.onSubmit}
                />
            </View>
        )
    }
}

export default connect()(NewCard)