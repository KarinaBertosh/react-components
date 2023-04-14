import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

const store = setupStore();

describe('render form', () => {
  it('render form', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });

  it('render form', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const divText = screen.getByTestId('form');
    expect(divText).toBeTruthy();
  });

  test('render button submit', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    getByTestId('submit');

    fireEvent.click(getByTestId('submit'));
  });
});
