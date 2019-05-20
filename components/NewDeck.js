import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { storeDeck } from '../actions'
import { Card, Input, Button } from 'react-native-elements'

class NewDeck extends Component {
    state = {
        title: ''
    }
    handleTextChange = (e) => {
        this.setState({
            title: e
        })
    }

    onSubmit = () => {
        this.props.dispatch(storeDeck({ title: this.state.title, questions: [] }))
        saveDeckTitle(this.state.title, { title: this.state.title, questions: [] })
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View>
                <Card>
                    <Text style={{ fontSize: 35 }}>What is the title of your new deck?</Text>
                    <Input
                        placeholder="Title"
                        onChangeText={this.handleTextChange}
                        inputContainerStyle={{ marginBottom: 30, marginTop: 30 }}
                    />
                    <Button
                        title="Submit"
                        onPress={this.onSubmit}
                    />
                </Card>
            </View>
        )
    }
}

export default connect()(NewDeck)