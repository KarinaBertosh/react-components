import React from 'react';
import { ICard } from '../cards';
import './style.css';

export class Card extends React.Component{
  private c: ICard;
  constructor(props: ICard) {
    super('div');
    this.c = props;
    this.render();
  }

  render() {
    return (
      <div className='one-card'>
        <h3>{this.c.title}</h3>
        <div className='m-t-5'>{this.c.compound}</div>
        <div className='m-t-5 price'>Price: {this.c.price}</div>
        <div className='m-t-5'>Stock: {this.c.stock}</div>
        <img src={this.c.photo} alt={this.c.photo} />
      </div>
    );
  }

}