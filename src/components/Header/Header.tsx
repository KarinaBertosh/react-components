import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './style.scss';


export class Header extends React.Component {
  render() {
    const currentUrl = window.location.hash;
    const isAboutPage = () => currentUrl === '#/info';
    const isMainPage = () => currentUrl === '#/';

    return (
      <>
        <div className="header">

          <Link style={{ textDecoration: "none", color: 'black', pointerEvents: isAboutPage() ? 'none' : 'auto' }} to="info" >
            <button className="button" style={{ opacity: isAboutPage() ? 0.5 : 1 }}>
              About Us
            </button>
          </Link>
          <Link style={{ textDecoration: "none", color: 'black' }} to="/">
            <button className="button" style={{ opacity: isMainPage() ? 0.5 : 1 }}>
              Main page
            </button>
          </Link>
        </div>
        <h3>Current page: {currentUrl === '#/info' ? 'About' : 'Main'}</h3>
        <Outlet />
      </>
    );

  }
}
