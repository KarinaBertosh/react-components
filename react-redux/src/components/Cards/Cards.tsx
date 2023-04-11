import React from 'react';
import { ICardInApi, ICardsProps } from '../types';
import './style.scss';


export const Cards = (props: ICardsProps): JSX.Element => {
  const { cards, sendId } = props;

  const getID = (id: number) => {
    ClickHandler(id);
  };

  const ClickHandler = (id: number) => {
    sendId(id);
  };


  return (
    <div className="cards">
      {cards.map((c: ICardInApi) => {
        return (
          <div key={c.id} className='cards' onClick={() => getID(c.id)}>
            <div className='custom-card'>
              <p>
                <b>
                  Episode
                </b>
                "{c.name}"
              </p>
            </div>
          </div>);
      })}
    </div>);
}
