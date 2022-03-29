import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../service/renderWithRouter';
import Foods from '../pages/Foods';

const ingredientButton = 'ingredient-search-radio';
const nameButton = 'name-search-radio';
const firstLetterButton = 'first-letter-search-radio';
const execButton = 'exec-search-btn';

describe('13 - Cria botoes de busca e filtro', () => {
  it('Será validado se existe um `ingredient-search-radio`', () => {
    render(<Foods />);
    const ingredient = screen.getByTestId(ingredientButton);
    expect(ingredient).toBeInTheDocument();
  });
  it('Será validado se existe um `name-search-radio`', () => {
    render(<Foods />);
    const name = screen.getByTestId(nameButton);
    expect(name).toBeInTheDocument();
  });
  it('Será validado se existe um `first-letter-search-radio`', () => {
    render(<Foods />);
    const firstletter = screen.getByTestId(firstLetterButton);
    expect(firstletter).toBeInTheDocument();
  });
  it('Será validado se existe um `exec-search-btn`', () => {
    render(<Foods />);
    const searchBtn = screen.getByTestId(execButton);
    expect(searchBtn).toBeInTheDocument();
  });
});
