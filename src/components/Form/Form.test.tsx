import React from 'react';
import { render, screen } from '@testing-library/react';
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

  it('Should capture name correctly onChange' , () => {
    // const component = mount(<Form />)
    // const input = component.find('input').at(0)
    // input.instance().value = 'hello'
    // input.simulate('change')
    // expect(component.state().name).toEqual('hello')
    // render(<Form />);
    // const nameInput = screen.getByRole('name')
    // expect(nameInput).toBeInTheDocument();
  })
});