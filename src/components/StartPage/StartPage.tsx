import React from 'react';
import { Card } from '../Card/Card';
import { data } from '../cards';
import { Cards } from '../Cards/Cards';
import { Search } from '../Search/Search';
import './style.scss';

export const StartPage = (): JSX.Element => {

    return (
        <div>
            <Search />
            <Cards />
        </div>
    );
};