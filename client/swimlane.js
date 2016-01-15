import React from 'react';
import Card from './card';

export class Swimlane extends React.Component {
    render() {
        var cards = [];
        this.props.cardList.forEach(function(card){
            cards.push(<Card key={card.name} cardDetails = {card} />);
        });
        return <div className="swimlane">
            <h3>{this.props.laneName}</h3>
            {cards}
        </div>;
    }
}
