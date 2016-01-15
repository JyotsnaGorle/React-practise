import React from 'react';
import {Card} from './card';
import {Swimlane} from './swimlane';

export class Board extends React.Component {
    constructor() {
        super();
          var res = function (){
            $.ajax({
              url : "board.json",
              type: "json"
            });
        };
        console.log(res());
        this.state  = res();
    }
    render() {
        var lanes = [];
        var card = {};
        for (card in this.state.cards){
            if(card.lane !== null) {
                lanes.push(<Swimlane lane={card.lane} key={card.lane} cardList={this.state.cards}/>);
            }
        }

        console.log(lanes.length);

        return <div className="board">
            <h1>Board</h1>
            {lanes}
        </div>;
    }
}
