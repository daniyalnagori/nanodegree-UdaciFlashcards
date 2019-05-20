import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
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

        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder='Question'
                    onChangeText={this.handleQuesChange}
                    inputContainerStyle={{ marginBottom: 15 }}
                />
                <Input
                    placeholder='Answer'
                    onChangeText={this.handleAnswerChange}
                    inputContainerStyle={{ marginBottom: 15 }}
                />

                <Button
                    title="Submit"
                    onPress={this.onSubmit}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default connect()(NewCard)