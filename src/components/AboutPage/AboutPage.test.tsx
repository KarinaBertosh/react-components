import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';
import { MemoryRouter } from 'react-router-dom';

describe('render about page', () => {
  it('render about page', async () => {
    render(
      <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
    );
  });
});