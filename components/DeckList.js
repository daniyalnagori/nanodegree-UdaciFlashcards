import React, { Component } from 'react'
import { Card, CardItem, Container, Header, Content, Right, Text } from 'native-base';


class DeckList extends Component {
    render() {
        const deck = [
            { name: 'React', questions: '2 cards' },
            { name: 'Angular', questions: '3 cards' },
            { name: 'Javascript', questions: '0 cards' }
        ]
        return (
            <Container>
                <Header />
                <Content>
                    {deck.map((item) => (
                        <Card key={item.name}>
                        <CardItem header button onPress={() => alert("This is Card Header")}>
                         <Text>{item.name}</Text>
                         <Right><Text note>{item.questions}</Text></Right>
                        </CardItem>
                      </Card>
                    ))}
                </Content>
            </Container>
        )
    }
}


export default DeckList