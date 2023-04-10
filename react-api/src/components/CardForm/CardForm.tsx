import React from 'react';
import { ICardForm } from '../types';
import './style.scss';
// start task
export const CardForm = (props: ICardForm): JSX.Element => {
  return (
    <div className='custom-card'>
      <h3>Order</h3>
      <div className='m-t-5'>Name: {props.name}</div>
      <div className='m-t-5 price'>Date: {props.date}</div>
      <div className='m-t-5'>Country: {props.country}</div>
      <div className='m-t-5'>Agreement: {props.agreement === true ? 'yes' : 'no'} </div>
      <div className='m-t-5'>Gender: {props.gender}</div>
      <img className='photo' src={props.photo} alt="photo" />
    </div>
  );
};