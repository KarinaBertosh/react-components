import React from 'react';
import {Card} from '../Card/Card';
import { data } from '../cards';
import './style.scss';

export const Cards = (): JSX.Element => {
    return (
        <div className='cards'>
            {data.cards && data.cards.map(((c) => {
                 return (
                    <Card card={c} key={c.id}/>
                  )
            }))}
        </div>
    );
}

