import React from 'react';
import cross from '../../assets/cross.png';
import { ICard } from '../types';
import Image from 'next/image';

interface IModalProps {
  active: boolean;
  setActive: () => void;
  card: ICard;
  isLoading?: boolean;
  error: string;
}

export const Modal = (props: IModalProps) => {
  const { active, setActive, card, error } = props;

  return (
    <>
      <div
        onClick={(e) => e.currentTarget === e.target && setActive()}
        className={active ? 'modal-overlay' : 'card-modal__display-none'}
      >
        <div className={active ? 'card-modal' : 'card-modal__display-none'}>
          <Image className="cross" src={cross} alt={'cross'} onClick={setActive} width={50}/>

          {error && <h1>{error}</h1>}
          <div >
            <div>
              <b role='name'>Name:</b> {card.name}
            </div>
            <div>
              <b>Created:</b> {card.created}
            </div>
            <div>
              <b>Air date:</b> {card.air_date}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
