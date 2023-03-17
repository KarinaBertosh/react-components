import React from 'react';
import { Card } from '../Card/Card';
import { ICard } from '../cards';



interface MyProps {
  cards: ICard[];
}

export default class CardsGet extends React.Component<MyProps> {
  render() {
    return (
      <div className="cards">
        {this.props.cards.map((c) => (
          <Card
            key={c.id}
            id={c.id}
            title={c.title}
            compound={c.compound}
            price={c.price}
            stock={c.stock}
            photo={c.photo}
          />
        ))}
      </div>
    );
  }
}