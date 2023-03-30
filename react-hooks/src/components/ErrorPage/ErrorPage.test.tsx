import React from 'react';
import { render } from '@testing-library/react';
import ErrorPage from './ErrorPage';


describe('render error page', () => {
  it('render error page', async () => {
    render(<ErrorPage />);
  });
});