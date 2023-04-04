import React from 'react';
import { ICard } from '../cards';
import './style.scss';

export const Card = (props: ICard): JSX.Element => {
  return (
    <div className='custom-card' data-testid="card">
      <h3>{props.title}</h3>
      <div className='m-t-5'>{props.compound}</div>
      <div className='m-t-5 price'>Price: {props.price}</div>
      <div className='m-t-5'>Stock: {props.stock}</div>
      <img src={props.photo} alt={props.photo} />
    </div>
  );

}