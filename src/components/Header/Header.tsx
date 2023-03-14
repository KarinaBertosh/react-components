import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

export const Header = (): JSX.Element => {
  const router = useNavigate();
  return (
    <div className="header">
      <button onClick={() => router('/info')} className="button">About Us</button>
      <button onClick={() => router('/main')} className="button">Main page</button>
    </div>
  );
}
