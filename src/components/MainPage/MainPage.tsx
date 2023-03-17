import React from 'react';
import { Cards } from '../Cards/Cards';
import { Search } from '../Search/Search';
import './style.css';


export default class MainPage extends React.Component {
  render() {
    const currentUrl = window.location.pathname;
    console.log(currentUrl);
    return (
      <div>
        <h3>Current page: {currentUrl === '/main' ? 'Main' : 'About'}</h3>
        <Search />
        <Cards />
      </div>
    );
  }
}