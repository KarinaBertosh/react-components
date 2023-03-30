import React from 'react';
import { render } from '@testing-library/react';
import { Cards } from './Cards';


describe('render cards', () => {
  it('render cards', async () => {
    render(<Cards />);
  });
});