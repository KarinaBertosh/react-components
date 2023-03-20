import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './style.scss';


export class Header extends React.Component {
  render() {
    const currentUrl = window.location.hash;
    const isAboutPage = () => currentUrl === '#/about';
    const isMainPage = () => currentUrl === '#/';
    const aboutPage = "about";
    const defaultPage = "/";
    const about = 'About';    
    const main = 'Main';    
    
    return (
      <>
        <div className="header">
        <div>
          <Link style={{ textDecoration: "none", color: 'black' }} to={defaultPage}>
            <button className="button" style={{ opacity: isMainPage() ? 0.5 : 1 }}>
              Main page
            </button>
          </Link>
          <Link style={{ textDecoration: "none", color: 'black', pointerEvents: isAboutPage() ? 'none' : 'auto' }} to={aboutPage} >
            <button className="button" style={{ opacity: isAboutPage() ? 0.5 : 1 }}>
              About Us
            </button>
          </Link>
        </div>
        <div>Current page: {isAboutPage() ? `${about}` : `${main}`} </div>
        </div>
        <Outlet />
      </>
    );

  }
}
