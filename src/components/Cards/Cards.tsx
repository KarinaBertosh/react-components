import React from 'react';
import { ICardInApi, ICardsProps } from '../types';


export const Cards = (props: ICardsProps): JSX.Element => {
  const { cards, sendId } = props;

  const clickHandler = (id: number) => {
    sendId(id);
  };


  return (
    <div className="cards">
      {cards.map((c: ICardInApi) => {
        return (
          <div key={c.id} className='cards' role='card' onClick={() => clickHandler(c.id)}>
            <div className='custom-card'>
              <p>
                <b role='episode'>
                  Episode
                </b>
                {c.name}
              </p>
            </div>
          </div>);
      })}
    </div>);
}

