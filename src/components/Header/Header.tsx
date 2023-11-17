"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import photo from '../../assets/photo.png';
import search from '../../assets/search.png';
import { useAppDispatch, useAppSelector } from '@/hook/redux';
import { removeUser } from '@/store/reducers/UserAuth';


interface IHeader {
  searchText?: string,
  updateValue?: (e: any) => void,
  handleKeyDown?: (e: any) => void,
  handleClickButton?: (e: any) => void,
  inputDisabled: boolean;
}

export const Header = (props: IHeader) => {
  const dispatch = useAppDispatch();
  const { searchText, updateValue, handleKeyDown, inputDisabled, handleClickButton } = props;
  const { email: currentEmail } = useAppSelector((state: any) => state.userReducer);
  
  const exit = (e: any) => dispatch(removeUser());

  return (
    <>
      <div className="header" data-testid="header">

        <div className="header__search">
          <div className="button"><Link href="/"><Image src={photo} alt="photo" width={30}></Image> Photos</Link></div>
          <input
            disabled={inputDisabled}
            placeholder='Search photo..'
            className="header__search__input"
            value={searchText}
            onChange={updateValue}
            onKeyDown={handleKeyDown}
          />
         <Image src={search} alt='search' width={30} height={30} onClick={handleClickButton}></Image>
        </div>

        {currentEmail ?
          <div className="profile__field">
            <div className="button"> <Link href="favs">Favorites</Link></div>
            <div className="button sign-in" onClick={exit}> <Link href="auth">Exit</Link></div>
          </div>
          : <div className="button sign-in"> <Link href="auth">Log in</Link></div>
        }

      </div >
    </>
  );
};

