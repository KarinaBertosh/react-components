import React from 'react';
import { ICardForm } from '../cards';
import './style.scss';

export function CardForm(props: ICardForm): JSX.Element {
  return (
    <div className='custom-card'>
      <h3>Order</h3>
      <div className='m-t-5'>Name: {props.currentName}</div>
      <div className='m-t-5 price'>Date: {props.currentDate}</div>
      <div className='m-t-5'>Country: {props.currentCountry}</div>
      <div className='m-t-5'>Agreement: {props.currentAgreement === true ? 'yes' : 'no'} </div>
      <div className='m-t-5'>Male: {props.currentMale === true ? 'yes' : 'no'}</div>
      <div className='m-t-5'>Female: {props.currentFemale === true ? 'yes' : 'no'}</div>
      <img className='photo' src={props.currentPhoto} alt="photo" />
    </div>
  );
}