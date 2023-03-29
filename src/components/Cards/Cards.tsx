import React from 'react';
import { Card } from '../Card/Card';
import { data } from '../cards';
import './style.scss';


export class Cards extends React.Component {

  getCards() {
    return (
      data.cards.map((c) => (
        <Card
          key={c.id}
          id={c.id}
          title={c.title}
          compound={c.compound}
          price={c.price}
          stock={c.stock}
          photo={c.photo}
        />
      ))
    );
  }

  render() {
    return (
      <div className="cards">
        {this.getCards()}
      </div>);
  }
}

