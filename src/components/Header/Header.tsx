import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { aboutPage, defaultPage, formPage } from '../App';
import './style.scss';


export class Header extends React.Component {
  render() {
    const currentUrl = window.location.hash;
    const isAboutPage = () => currentUrl === `${net}${aboutPage}`;
    const isMainPage = () => currentUrl === `${net}${defaultPage}`;
    const isFormPage = () => currentUrl === `${net}${formPage}`;
    const about = 'About';
    const form = 'Form';
    const main = 'Main';
    const net = '#';
    let header = '';

    switch (currentUrl) {
      case `${net}${aboutPage}`:
        header = about;
        break;
      case `${net}${formPage}`:
        header = form;
        break;
      case `${net}${defaultPage}`:
        header = main;
        break;
    }

    return (
      <>
        <div className="header">
          <div>
            <Link style={{ textDecoration: "none", color: 'black' }} to={defaultPage}>
              <button className="button" style={{ opacity: isMainPage() ? 0.5 : 1 }}>
                Main page
              </button>
            </Link>
            <Link style={{ textDecoration: "none", color: 'black', pointerEvents: isFormPage() ? 'none' : 'auto' }} to={formPage}>
              <button className="button" style={{ opacity: isFormPage() ? 0.5 : 1 }}>
                Form page
              </button>
            </Link>
            <Link style={{ textDecoration: "none", color: 'black', pointerEvents: isAboutPage() ? 'none' : 'auto' }} to={aboutPage} >
              <button className="button" style={{ opacity: isAboutPage() ? 0.5 : 1 }}>
                About Us
              </button>
            </Link>
          </div>
          <div>Current page: {header}
          </div>
        </div>
        <Outlet />
      </>
    );

  }
}
