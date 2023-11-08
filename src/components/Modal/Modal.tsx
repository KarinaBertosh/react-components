import React from 'react';
import cross from '../../assets/cross.png';
import { ICard } from '../types';


interface IModalProps {
  active: boolean;
  setActive: () => void;
  card: ICard;
  isLoading?: boolean;
  error: string;  
}

export const Modal = (props: IModalProps): JSX.Element => {
  const { active, setActive, card, error } = props;

  return (
    <>
      <div
        onClick={(e) => e.currentTarget === e.target && setActive()}
        className={active ? 'modal-overlay' : 'card-modal__display-none'}
      >
        <div className={active ? 'card-modal' : 'card-modal__display-none'}>
          <img className="cross" src={cross} onClick={setActive}></img>
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
