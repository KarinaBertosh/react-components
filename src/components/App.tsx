import React from 'react';
import { Header } from './Header/Header';
import MainPage from './MainPage/MainPage';

export default class App extends React.Component {
  render() {
    const currentUrl = window.location.pathname;
    console.log(currentUrl);
    return (
      <div>
        <Header />
        <h3>Current page: {currentUrl === '/' ? 'Main' : 'About'}</h3>
      </div>
    );
  }
}