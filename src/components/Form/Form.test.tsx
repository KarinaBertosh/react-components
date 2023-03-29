import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';

describe('render form', () => {
  it('render form', async () => {
    render(<Form />);
  });

  it('render form', async () => {
    render(<Form />);
    const divText = screen.getByTestId('form');
    expect(divText).toBeTruthy();
  });

  test("render button submit", () => {
    const { getByTestId } = render(<Form />);

    getByTestId("submit");

    fireEvent.click(getByTestId("submit"));
  });
});

