"use client";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { pages, routes } from '../common';
import Image from 'next/image';
import photo from '../../assets/photo.png';
import { IUser, getAllUsers } from '@/types/user';
import { useAppDispatch, useAppSelector } from '@/hook/redux';
import { removeUser } from '@/store/reducers/UserAuth';


interface IHeader {
  searchText?: string,
  saveChange?: (e: any) => void,
  handleKeyDown?: (e: any) => void,
  inputDisabled: boolean;
}

export const Header = (props: IHeader) => {
  const { searchText, saveChange, handleKeyDown, inputDisabled } = props;
  const [header, setHeader] = useState('Main');
  const router = useRouter();
  const { email: currentEmail } = useAppSelector((state: any) => state.userReducer);
  const dispatch = useAppDispatch();

  const exit = (e: any) => {
    dispatch(removeUser());
  }

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
            disabled={inputDisabled}
            placeholder='Search photo..'
            role="search"
            type="search"
            className="search__input"
            value={searchText}
            onChange={saveChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        {currentEmail ? <div className="button sign-in"> <a onClick={(e) => exit(e)}>Exit</a></div> : <div className="button sign-in"> <Link href="auth">Log in</Link></div>}
      </div >
    </>
  );
};

