import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';
import { Route } from 'react-router-dom';

describe('render header', () => {
    it('render header', async () => {
        <Route>
            render(<Header />)
        </Route>;
    });
});