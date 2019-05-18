import React, { Component } from 'react'
import { Card, CardItem, Container, Header, Content, Right, Text } from 'native-base';
import { AsyncStorage } from 'react-native'
import { getDecks } from '../utils/api'

class DeckList extends Component {
    state = {
        decks: []
    }
    componentDidMount() {
       getDecks().then((res) => {
           this.setState({
               decks: Object.values(res)
           })
       })
    }
    render() {
        const {decks} = this.state

        return (
            <Container>
                <Header />           
                <Content>
                    {decks.map((item) => (
                        <Card key={item.title}>
                        <CardItem header button onPress={() => alert('sdf')}>
                         <Text>{item.title}</Text>
                         <Right><Text note>{item.questions.length} cards</Text></Right>
                        </CardItem>
                      </Card>
                    ))}
                </Content>
            </Container>
        )
    }
}

export default DeckList