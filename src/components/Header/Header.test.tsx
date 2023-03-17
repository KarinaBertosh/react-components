import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

test('render header', () => {
    render(<Header />);
});

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => (jest.fn()),
// }));