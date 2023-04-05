import React, { useEffect, useState } from 'react';
import { ICard } from '../types';
import cross from '../../assets/cross.svg';
import './style.scss';

interface IModal {
  active: boolean;
  setActive: any;
  card: ICard;
}


export const Modal = (props: IModal): JSX.Element => {
  const { active, setActive, card } = props;

  return (
    <div onClick={e => (e.currentTarget === e.target) && setActive()} className={active ? 'modal-overlay' : 'card-modal__display-none'}>
      <div className={active ? 'card-modal' : 'card-modal__display-none'}>
        <img className='cross' src={cross} onClick={setActive}></img>
        <div onClick={(e) => e.stopPropagation()}>
          <div><b>Name:</b> {card.name}</div>
          <div><b>Created:</b> {card.created}</div>
          <div><b>Air date:</b> {card.air_date}</div>
        </div>
      </div>
    </div>
  );
}

