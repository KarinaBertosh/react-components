import React from 'react';
import { render } from '@testing-library/react';
import { Search } from './Search';


describe('render  search', () => {
  it('render search', async () => {
      render(<Search />);
  });
});