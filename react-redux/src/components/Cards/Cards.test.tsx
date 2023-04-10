import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Cards } from './Cards';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

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

it('render cards', () => {
  act(() => {
    render(<Cards cards={cards} />, container);
  });
});
