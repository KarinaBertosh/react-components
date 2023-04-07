import React from 'react';
import { MainPage } from './MainPage';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as api from '../api';

jest.mock('../api');
describe('render main page', () => {
  beforeEach(() => jest.clearAllMocks());

  it('render api', async () => {
    api.getCards.mockResolvedValue([
      {
        air_date: 'December 2, 2013',
        characters: [
          'https://rickandmortyapi.com/api/character/1',
          'https://rickandmortyapi.com/api/character/2',
          'https://rickandmortyapi.com/api/character/35',
          'https://rickandmortyapi.com/api/character/38',
          'https://rickandmortyapi.com/api/character/62',
          'https://rickandmortyapi.com/api/character/92',
          'https://rickandmortyapi.com/api/character/127',
          'https://rickandmortyapi.com/api/character/144',
          'https://rickandmortyapi.com/api/character/158',
          'https://rickandmortyapi.com/api/character/175',
          'https://rickandmortyapi.com/api/character/179',
          'https://rickandmortyapi.com/api/character/181',
          'https://rickandmortyapi.com/api/character/239',
          'https://rickandmortyapi.com/api/character/249',
          'https://rickandmortyapi.com/api/character/271',
          'https://rickandmortyapi.com/api/character/338',
          'https://rickandmortyapi.com/api/character/394',
          'https://rickandmortyapi.com/api/character/395',
          'https://rickandmortyapi.com/api/character/435',
        ],
        created: '2017-11-10T12:56:33.798Z',
        episode: 'S01E01',
        id: 1,
        name: 'Pilot',
        url: 'https://rickandmortyapi.com/api/episode/1',
      },
    ]);
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    await waitFor(() => {
      screen.getByText('Pilot');
    });
    // await screen.getByText('Pilot')
  });
});
