import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './style.css';
import '../App.css';

export class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <button className="button"><Link style={{ textDecoration: "none", color: 'black' }} to="info" >About Us</Link></button>
          <button className="button"><Link style={{ textDecoration: "none", color: 'black' }} to="/main">Main page</Link></button>
        </div>
        <Outlet />
      </>
    );

  }
}
