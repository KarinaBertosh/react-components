import React from 'react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

it('render header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
});
