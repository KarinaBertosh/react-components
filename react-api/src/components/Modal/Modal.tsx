import React, { useEffect, useRef } from 'react';
import { ICard } from '../cards';
import cross from '../../assets/cross.svg';
import './style.scss';

interface IModal {
  active: boolean;
  setActive: any;
  card: ICard;
}


export const Modal = (props: IModal): JSX.Element => {
  const { active, setActive, card } = props;
  console.log(active);


  return (
    <div onClick={e => (e.currentTarget === e.target) && setActive()} className={active ? 'modal-overlay' : 'card-modal__display-none'}>
      <div className={active ? 'card-modal' : 'card-modal__display-none'}>
        <img className='cross' src={cross} onClick={setActive}></img>
        <div onClick={(e) => e.stopPropagation()}>
          <div>Name: {card.name}</div>
          <div>Characters: </div>
          <div>Created: {card.created}</div>
          <div>Air date: {card.air_date}</div>
        </div>
      </div>
    </div>
  );
}

