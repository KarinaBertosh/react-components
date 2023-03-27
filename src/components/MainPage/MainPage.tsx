import React from 'react';
import { Cards } from '../Cards/Cards';
import { Header } from '../Header/Header';
import { Search } from '../Search/Search';
import './style.scss';


export default function MainPage(): JSX.Element {
  return (
    <>
      <Header />
      <Search />
      <Cards />
    </>
  );
}