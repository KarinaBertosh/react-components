import React from 'react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

it('render header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
});

it('render button in header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  screen.getByText('Main page');
  screen.getByText('Form page');
  screen.getByText('About Us');
  screen.getByText('Current page:');
});
