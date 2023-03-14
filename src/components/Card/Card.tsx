import React from 'react';
import { ICard } from '../cards';
import './style.scss';

interface ICardProps {
    card: ICard;
}

export const Card = (props: ICardProps): JSX.Element => {
    const { card: c } = props;

    return (
        <div className='one-card'>
            <h3>{c.title}</h3>
            <div className='m-t-5'>{c.compound}</div>
            <div className='m-t-5 price'>Price: {c.price}</div>
            <div className='m-t-5'>Stock: {c.stock}</div>
            <img src={c.photo} alt={c.photo} />
        </div>
    );
};