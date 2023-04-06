// import React from 'react';
import React from 'react';
import {  unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Header } from './Header';
import { Route } from 'react-router-dom';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render header', () => {
  act(() => {
    <Route>
      render(
      <Header />, container);
    </Route>;
  });
});
