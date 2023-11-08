import React from 'react';
import { render } from '@testing-library/react';
import { Cards } from './Cards';

const cards = [
  {
    air_date: 'string',
    characters: ['1', '2'],
    created: 'string',
    episode: 'string',
    id: 1,
    name: 'string',
    url: 'string',
  },
  {
    air_date: 'string',
    characters: ['1', '2'],
    created: 'string',
    episode: 'string',
    id: 2,
    name: 'string',
    url: 'string',
  },
];
const sendId = jest.fn();

it('render cards', () => {
  render(<Cards cards={cards} sendId={sendId} />);

});
