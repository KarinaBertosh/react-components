import React from 'react';
import { Header } from './Header/Header';
import MainPage from './MainPage/MainPage';
import './style.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MainPage />
      </>
    );
  }
}