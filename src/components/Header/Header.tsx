"use client";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { pages, routes } from '../common';


export const Header = () => {
  const [header, setHeader] = useState('Main');
  const router = useRouter();

  useEffect(() => {
    switch (router.pathname) {
      case `${routes.defaultPage}${routes.aboutPage}`:
        setHeader(pages.about);
        break;
      case `${routes.defaultPage}${routes.formPage}`:
        setHeader(pages.form);
        break;
      case `${routes.defaultPage}`:
        setHeader(pages.main);
        break;
    }
  }, [router.pathname]);

  return (
    <>
      <div className="header" data-testid="header">
        <div className='navigate'>
          <div className="button" data-testid="main" >
            <Link href="/">Photos</Link>
          </div>
          <div className="button" data-testid="form"  >
            <Link href="form">Form</Link>
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
