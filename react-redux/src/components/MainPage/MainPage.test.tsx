import React from 'react';
import { MainPage } from './MainPage';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store.tsx';

const store = setupStore();

describe('render main page', () => {
  it('render main page', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );
    
    const search = screen.getByRole('search');
    expect(search).toBeTruthy()
  });
});
