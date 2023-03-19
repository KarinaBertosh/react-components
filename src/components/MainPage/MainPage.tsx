import React from 'react';
import { Cards } from '../Cards/Cards';
import { Header } from '../Header/Header';
import { Search } from '../Search/Search';
import './style.scss';


export default class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <Cards />
      </>
    );
  }
}