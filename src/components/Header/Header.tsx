"use client";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


export const defaultPage = "/";
export const aboutPage = "/about";
export const formPage = "/form";
export const errorPage = "*";

export const Header = (): JSX.Element => {
  // const navigate = useNavigate();
  const [header, setHeader] = useState('Main');
  // const currentUrl = window.location.hash;
  // const isAboutPage = () => currentUrl === `${net}${aboutPage}`;
  // const isMainPage = () => currentUrl === `${net}${defaultPage}`;
  // const isFormPage = () => currentUrl === `${net}${formPage}`;
  const about = 'About';
  const form = 'Form';
  const main = 'Main';
  const net = '#';

  // useEffect(() => {
  //   switch (currentUrl) {
  //     case `${net}${aboutPage}`:
  //       setHeader(about);
  //       break;
  //     case `${net}${formPage}`:
  //       setHeader(form);
  //       break;
  //     case `${net}${defaultPage}`:
  //       setHeader(main);
  //       break;
  //   }
  // });

  return (
    <>
      <div className="header" data-testid="header">
        <div className='navigate'>
          <div className="button" data-testid="main" >
            Main page
          </div>
          <div className="button" data-testid="form"  >
            Form page
          </div>
          <div className="button" data-testid="about" >
          About Us
        </div>
      </div>
      <div className="button">Current page: {header}</div>
    </div >
    </>
  );
}
