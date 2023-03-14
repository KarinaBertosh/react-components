import React from 'react';
import './style.scss';

export const Search = (): JSX.Element => {
    return (
        <div>
            <div className="search">
                <input type="search" className="search__input"/>
                <button className="button">Search</button>
            </div>
        </div>
    );
}