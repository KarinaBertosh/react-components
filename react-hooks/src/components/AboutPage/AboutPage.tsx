import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';


export default function AboutPage(): JSX.Element {
  return (
    <>
      <Header />
      <div>
        Wonderland - this is a flower shop!
        Our bouquets are created specifically to please all women. Our bouquets bring joy to both.
      </div>
    </>
  );
}