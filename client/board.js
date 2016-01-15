import React from 'react';
import {Card} from './card';
import {Swimlane} from './swimlane';

export class Board extends React.Component {
    constructor() {
        super();
        this.state  = $.ajax({
              url: "/client/board.json",
              dataType: "json"
            }).done(function(response) {
              this.state = response;
            });
      console.log(this.state);
    }
    render() {
      var lanes = [];

      this.state.swimlanes.forEach(function(lane){
        lanes.push(<Swimlane key = {lane.name} laneName = {lane.name} cardList = {lane.cards} />)
      });
        return <div className="board">
          {lanes}
        </div>;
    }
}
