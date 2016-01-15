import React from 'react';
import Card from './card';

export class Swimlane extends React.Component {
    render() {
        console.log(this.props.cardList);
        var cards =[];
        this.props.cardList.forEach(function(card){
            cards.push(<Card cardDetails = {card} key = {card.id}/>);
        });
        console.log(cards);

        return <div className="swimlane">
            <h3>Swim</h3>
            {cards}
        </div>;
    }
}
