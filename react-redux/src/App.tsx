import React from "react";
import { Route, Routes } from "react-router-dom";
const { MainPage } = require("./components/MainPage/MainPage.tsx");
const { AboutPage } = require("./components/AboutPage/AboutPage.tsx");
const { ErrorPage } = require("./components/ErrorPage/ErrorPage.tsx");
const { FormPage } = require("./components/FormPage/FormPage.tsx");
const { Header } = require("./components/Header/Header.tsx");

export const defaultPage = "/";
export const aboutPage = "/about";
export const formPage = "/form";
export const errorPage = "*";

export const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={defaultPage} element={<MainPage />} />
        <Route path={aboutPage} element={<AboutPage />} />
        <Route path={formPage} element={<FormPage />} />
        <Route path={errorPage} element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
