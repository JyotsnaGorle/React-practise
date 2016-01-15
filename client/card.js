import React from 'react';

export class Card extends React.Component {
    render() {
        const {id,title,description,lane,classType} = this.props.cardDetails;
        return <div className={classType}>
            <h2>{id}</h2>
            <h2>{title}</h2>
        </div>;
    }
}
