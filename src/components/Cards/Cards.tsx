import React from 'react';
import { Card } from '../Card/Card';
import { data } from '../cards';
import CardsGet from './CardsGet';
import './style.css';

export class Cards extends React.Component {
  constructor() {
    super('div');
    this.render();
  }

  getCards() {
    return data.cards.map((c) => ({
      id: c.id,
      title: c.title,
      compound: c.compound,
      price: c.price,
      stock: c.stock,
      photo: c.photo,
    }));
  }

  render() {
    return (
      <div>
        <CardsGet cards={this.getCards()} />;
      </div>);
  }
}

