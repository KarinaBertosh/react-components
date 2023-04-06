import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Modal } from './Modal';

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

const props = {
  active: false,
  setActive: !false,
  card: {
    air_date: 'string',
    characters: ['1', '2'],
    created: 'string',
    episode: 'string',
    id: 1,
    name: 'string',
    url: 'string',
  },
};

// const card = {
//   air_date: 'string',
//   characters: ['1', '2'],
//   created: 'string',
//   episode: 'string',
//   id: 1,
//   name: 'string',
//   url: 'string',
// };

// it('render modal', () => {
//   render(<Modal props={props} />);
// });
//  render(<Modal active={active} setActive={!(active)} card={card} />);
//

describe('render modal', () => {
  it('render modal', async () => {
    render(<Modal props={props}/>, container);
  });
});
