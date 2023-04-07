import React from 'react';
import { MainPage } from './MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './AboutPage/AboutPage';
import { ErrorPage } from './ErrorPage/ErrorPage';
import { FormPage } from './FormPage/FormPage';
import './style.scss';


export const defaultPage = "/";
export const aboutPage = "/about";
export const formPage = "/form";
export const errorPage = "*";


export const App = (): JSX.Element =>  {
  return (
    <>
      <Routes>
        <Route path={defaultPage} element={<MainPage />} />
        <Route path={aboutPage} element={<AboutPage />} />
        <Route path={formPage} element={<FormPage />} />
        <Route path={errorPage} element={<ErrorPage />} />
      </Routes>
    </>
  );
}