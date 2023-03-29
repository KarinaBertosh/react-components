import React from 'react';
import './style.scss';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div id="error-page" className='error-page'>
        <h1>Oops!</h1>
        <p>Sorry, this page doesn't exist.</p>
      </div>
    );
  }
}