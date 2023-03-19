import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

test('render header', () => {
    it('ddd', () => {
        const a = render(<Header />);

    });
    it('ddd2', () => {
        const a = render(<Header />);

    });
});

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => (jest.fn()),
// }));