import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { ICard } from '../cards';
import '@testing-library/jest-dom';

const testCard: ICard = {
    id: "1",
    title: "Bouquet `Flowering garden`",
    compound: "Chrysanthemum, bush rose, limonium, alstroemeria, pistachio, assorted packaging",
    price: "10$",
    stock: 24,
    photo: "https://podarok.by/upload/resize_cache/iblock/2ea/450_450_140cd750bba9870f18aada2478b24840a/2ea9cbe3255a7568284c432302962a91.jpeg",
};

describe('render card', () => {
    it('render card', async () => {
        render(<Card props={testCard} />);
        const divText = screen.getByTestId('card');
        expect(divText).toBeInTheDocument();
    });
    test('render price', (): void => {
        const { getByText } = render(<Card props={testCard} />);
        expect(getByText("Price:")).toBeTruthy();
    });
});