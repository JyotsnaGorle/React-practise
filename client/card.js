import React from 'react';

export class Card extends React.Component {
    render() {
        const {name, attr1, attr2} = this.props.cardDetails;
        return <div className="card">
            <h2>{name}</h2>
            <h2>{attr1}</h2>
            <h2>{attr2}</h2>
        </div>;
    }
}
