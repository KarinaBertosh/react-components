import React from 'react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

it('render header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const main = screen.getByTestId('main');
  fireEvent.click(main);

  const form = screen.getByTestId('form');
  fireEvent.click(form);

  const about = screen.getByTestId('about');
  fireEvent.click(about);
});
