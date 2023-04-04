import React, { useState } from 'react';
import '../Card/style.scss';
import './style.scss';


interface ICardsProps {
  cards: ICardInApi[],
  sendId: (id: number) => void,
}

interface ICardInApi {
  air_date: string,
  characters: Array<string>,
  created: string,
  episode: string,
  id: number,
  name: string,
  url: string,
}


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
                Episode "{c.name}"
              </p>
              <p>
                Air date: {c.air_date}
              </p>
            </div>
          </div>);
      })}
    </div>);
}

