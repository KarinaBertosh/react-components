import React from 'react';
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

  const closeModal = () => {
    setActive(false)
  }

  return (
    <div className={active ? 'card-modal' : 'card-modal__display-none'}>
      <img className='cross' src={cross} onClick={closeModal}></img>
      <div>Name {card.name}</div>
      <div>Characters </div>
      <div>Created {card.created}</div>
      <div>Air date {card.air_date}</div>
    </div>
  );
}

