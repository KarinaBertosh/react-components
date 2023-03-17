import React from 'react';
import './style.css';

export class Search extends React.Component {
  render() {
    return (
      <div className='search'>
        <input type="search" className="search__input" />
        <button className="button">Search</button>
      </div>
    );
  }

}