import React from 'react';
import { Cards } from './Cards/Cards';
import { Search } from './Search/Search';
import { Outlet } from "react-router-dom";
import { Header } from './Header/Header';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Cards />
        <Outlet />
      </div>
    );
  }
}