import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';


export default class InfoPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          About us
        </div>
        <Outlet />
      </>
    );
  }
}