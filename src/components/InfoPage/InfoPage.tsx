import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';


export default class InfoPage extends React.Component {
  render() {
    return (
      <>
        <Outlet />
        <div>
          About us
        </div>
      </>
    );
  }
}