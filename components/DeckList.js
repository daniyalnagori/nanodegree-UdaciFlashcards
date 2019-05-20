import React, { Component } from 'react'
import { Card, CardItem, Container, Header, Content, Right, Text, View } from 'native-base';
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

class DeckList extends Component {
    state = {
        decks: []
    }
    componentDidMount() {
       getDecks().then((res) => {
           this.props.dispatch(receiveDecks(res))
           this.setState({
               decks: Object.values(res)
           })
       })
    }
    render() {
        const { decks } = this.props

        return (
            <Container>
                <Header />           
                <Content>
                    {decks? Object.values(decks).map((deck) => (
                        <Card>
                        <CardItem header button onPress={() => this.props.navigation.navigate(
                            'DeckView', 
                            { deckTitle: deck.title}
                        )}>
                         <Text>{deck.title}</Text>
                         <Right><Text note>{deck.questions.length} cards</Text></Right>
                        </CardItem>
                      </Card>
                    )): <View></View>}
                </Content>
            </Container>
        )
    }
}

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)