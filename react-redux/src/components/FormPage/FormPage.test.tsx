import React from 'react';
import { render } from '@testing-library/react';
import { FormPage } from './FormPage';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store.tsx';

const store = setupStore();

describe('render form page', () => {
  it('render form page', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FormPage />
        </MemoryRouter>
      </Provider>
    );
  });
});
