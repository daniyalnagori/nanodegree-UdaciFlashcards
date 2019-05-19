import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert, TouchableOpacity, TextInput} from 'react-native'
import { saveDeck } from '../utils/api'
import { connect } from 'react-redux'
import { storeDeck } from '../actions'

class NewDeck extends Component {
    state = {
        title: 'hassan'
    }
    handleTextChange = (e) => {
        this.setState({
            title: e
        })
    }

    onSubmit = () => {
        this.props.dispatch(storeDeck({title: this.state.title, questions: []}))
        // saveDeck(this.state.title, {title: this.state.title, questions: []}).then((res) => {
            
        // })
        console.log(this.state.title)
    }
    
    render() {
        return (
            <View style={style.container}>
                <Text style={style.mainHeading}>What is the title of your new deck?</Text>
                <TextInput
                    style={style.input}
                    onChangeText={this.handleTextChange}
                    value={this.state.title}
                />
                <TouchableOpacity onPress={this.onSubmit}>
                    <View style={style.btn}>
                        <Text style={style.buttonText}>Add Deck</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainHeading: {
        fontSize: 35,
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    btn: {
        marginTop: 50,
        backgroundColor: 'blue',
        borderRadius: 5
    },
    input: { 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        width: 200,
        margin: 50,
        padding: 8 
    }
})

export default connect()(NewDeck)