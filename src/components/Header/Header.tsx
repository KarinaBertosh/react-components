"use client";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { pages, routes } from '../common';
import Image from 'next/image';
import photo from '../../assets/photo.png';

interface IHeader {
  searchText?: string,
  saveChange?: (e: any) => void,
  handleKeyDown?: (e: any) => void,
  disabled: boolean;
}

export const Header = (props: IHeader) => {
  const { searchText, saveChange, handleKeyDown, disabled } = props;
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
          <div className="button">
            <Link href="/"><Image src={photo} alt="photo" width={30}></Image> Photos</Link>
          </div>
          <div className="button"> <Link href="about">About Us</Link></div>
        </div>
        <div className="search">
          <input
            disabled={disabled}
            placeholder='Search photo..'
            role="search"
            type="search"
            className="search__input"
            value={searchText}
            onChange={saveChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="button sign-in"> <Link href="form">Sign in</Link></div>
      </div >
    </>
  );
};
