import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { aboutPage, defaultPage, formPage } from '../App';
import './style.scss';


export function Header(): JSX.Element {
  const navigate = useNavigate();
  const [header, setHeader] = useState('');
  const currentUrl = window.location.hash;
  const isAboutPage = () => currentUrl === `${net}${aboutPage}`;
  const isMainPage = () => currentUrl === `${net}${defaultPage}`;
  const isFormPage = () => currentUrl === `${net}${formPage}`;
  const about = 'About';
  const form = 'Form';
  const main = 'Main';
  const net = '#';

  useEffect(() => {
    switch (currentUrl) {
      case `${net}${aboutPage}`:
        setHeader(about);
        break;
      case `${net}${formPage}`:
        setHeader(form);
        break;
      case `${net}${defaultPage}`:
        setHeader(main);
        break;
    }
  });


  return (
    <>
      <div className="header">
        <div>
          <button className="button" style={{ opacity: isMainPage() ? 0.5 : 1 }} onClick={() => navigate(defaultPage)}>
            Main page
          </button>
          <button className="button" style={{ opacity: isFormPage() ? 0.5 : 1 }} onClick={() => navigate(formPage)}>
            Form page
          </button>
          <button className="button" style={{ opacity: isAboutPage() ? 0.5 : 1 }} onClick={() => navigate(aboutPage)}>
            About Us
          </button>
        </div>
        <div>Current page: {header}</div>
      </div>
    </>
  );
}
