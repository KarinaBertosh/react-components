"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import photo from '../../assets/photo.png';
import { useAppDispatch, useAppSelector } from '@/hook/redux';
import { removeUser } from '@/store/reducers/UserAuth';


interface IHeader {
  searchText?: string,
  saveChange?: (e: any) => void,
  handleKeyDown?: (e: any) => void,
  inputDisabled: boolean;
}

export const Header = (props: IHeader) => {
  const dispatch = useAppDispatch();
  const { searchText, saveChange, handleKeyDown, inputDisabled } = props;
  const { email: currentEmail } = useAppSelector((state: any) => state.userReducer);

  const exit = (e: any) => dispatch(removeUser());

  return (
    <>
      <div className="header" data-testid="header">
        <div className='navigate'>
          <div className="button">
            <Link href="/"><Image src={photo} alt="photo" width={30}></Image> Photos</Link>
          </div>
          <div className="button">
            <Link href="about">About Us</Link>
          </div>
        </div>
        <input
          disabled={inputDisabled}
          placeholder='Search photo..'
          role="search"
          type="search"
          className="search-input"
          value={searchText}
          onChange={saveChange}
          onKeyDown={handleKeyDown}
        />
        {currentEmail ? <div className="button sign-in"> <a onClick={(e) => exit(e)}>Exit</a></div> : <div className="button sign-in"> <Link href="auth">Log in</Link></div>}
      </div >
    </>
  );
};

