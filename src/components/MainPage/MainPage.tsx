import React from 'react';
import { Cards } from '../Cards/Cards';
import { Search } from '../Search/Search';
import './style.scss';


export default class MainPage extends React.Component {
  render() {
    return (
      <>
        <Search />
        <Cards />
      </>
    );
  }
}