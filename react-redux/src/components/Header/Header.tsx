import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { aboutPage, defaultPage, formPage } from '../App';
import './style.scss';


export const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const [header, setHeader] = useState('Main');
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
      <div className="header" data-testid="header">
        <div className='navigate'> 
          <div className="button" data-testid="main" style={{ opacity: isMainPage() ? 0.5 : 1 }} onClick={() => navigate(defaultPage)}>
            Main page
          </div>
          <div className="button" data-testid="form" style={{ opacity: isFormPage() ? 0.5 : 1 }} onClick={() => navigate(formPage)}>
            Form page
          </div>
          <div className="button" data-testid="about" style={{ opacity: isAboutPage() ? 0.5 : 1 }} onClick={() => navigate(aboutPage)}>
            About Us
          </div>
        </div>
        <div className="button">Current page: {header}</div>
      </div>
    </>
  );
}
