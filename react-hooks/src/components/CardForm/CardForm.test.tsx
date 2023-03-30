import React from 'react';
import { render } from '@testing-library/react';
import { CardForm } from './CardForm';


describe('render card form', () => {
  it('render card form', async () => {
    render(<CardForm />);
  });
});