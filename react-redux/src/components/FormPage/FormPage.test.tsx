import React from 'react';
import { render } from '@testing-library/react';
import { FormPage } from './FormPage';
import { MemoryRouter } from 'react-router-dom';


describe('render form page', () => {
  it('render form page', async () => {
    render(
      <MemoryRouter>
        <FormPage />
      </MemoryRouter>
    );
  });
});