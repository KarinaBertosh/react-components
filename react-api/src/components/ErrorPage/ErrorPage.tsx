import React from 'react';
import './style.scss';

export default function ErrorPage(): JSX.Element {
    return (
      <div id="error-page" className='error-page'>
        <h1>Oops!</h1>
        <p>Sorry, this page doesn't exist.</p>
      </div>
    );
}