"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


export const defaultPage = "/";
export const aboutPage = "/about";
export const formPage = "/form";
export const errorPage = "*";

export const Header = () => {
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
            <Link href="/">Main page</Link>
          </div>
          <div className="button" data-testid="form"  >
            <Link href="form">Form page</Link>
          </div>
          <div className="button" data-testid="about" >
            <Link href="about">About Us</Link>
          </div>
        </div>
        <div className="button">Current page: {header}</div>
      </div >
    </>
  );
};
