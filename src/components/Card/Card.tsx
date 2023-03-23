import React from 'react';
import { ICard } from '../cards';
import './style.scss';

interface MyProps {
  props: ICard;
}

export class Card extends React.Component<MyProps> {
  private c: ICard;
  constructor(props: ICard) {
    super(props);
    this.c = props;
    this.render();
  }

  render() {
    return (
      <div className='custom-card' data-testid="card">
        <h3>{this.c.title}</h3>
        <div className='m-t-5'>{this.c.compound}</div>
        <div className='m-t-5 price'>Price: {this.c.price}</div>
        <div className='m-t-5'>Stock: {this.c.stock}</div>
        <img src={this.c.photo} alt={this.c.photo} />
      </div>
    );
  }

}