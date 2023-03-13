import React from 'react';
import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';
import InfoPage from './components/InfoPage/InfoPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import './App.scss';

function App() {
  const router = useNavigate();

  return (
    <div className="App">
      <button onClick={() => router('/info')}>About Us</button>
      <button onClick={() => router('/main')}>Main page</button>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/main" element={<StartPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
