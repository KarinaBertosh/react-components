import React from 'react';
import MainPage from './MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import InfoPage from './InfoPage/InfoPage';
import ErrorPage from './ErrorPage/ErrorPage';
import './style.scss';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    );
  }
}