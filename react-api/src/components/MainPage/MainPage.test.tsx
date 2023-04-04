import React from 'react';
import { render } from '@testing-library/react';
import { MainPage } from './MainPage';
import { MemoryRouter } from 'react-router-dom';



describe('render main page', () => {
  it('render main page', async () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
  });
});