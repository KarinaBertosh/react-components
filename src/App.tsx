import React from 'react';
import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import { StartPage } from './components/StartPage/StartPage';
import { InfoPage } from './components/InfoPage/InfoPage';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Header } from './components/Header/Header';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/main" element={<StartPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
