import React from 'react';
import { Modal } from './Modal';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const setActive = jest.fn();

const card = {
  air_date: 'string',
  characters: ['1', '2'],
  created: 'string',
  episode: 'string',
  id: 1,
  name: 'string',
  url: 'string',
};

it('render modal', () => {
  render(
    <MemoryRouter>
      <Modal active={false} setActive={setActive} card={card} error={'error'} />
    </MemoryRouter>
  );
  const name = screen.getByRole('name');
  expect(name).toBe(name)
});
