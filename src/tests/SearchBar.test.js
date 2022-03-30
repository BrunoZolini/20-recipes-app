import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../service/renderWithRouter';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';

const ingredientButton = 'ingredient-search-radio';
const nameButton = 'name-search-radio';
const firstLetterButton = 'first-letter-search-radio';
const execButton = 'exec-search-btn';
const SEARCH_BUTTON = 'search-top-btn';
const SEARCH_INPUT = 'search-input';
const MOCK_FOOD = { meals: [{ idMeal: 1 }] };
const MOCK_DRINK = { drinks: [{ idDrink: 2 }] };

describe('13 - Cria botoes de busca e filtro', () => {
  it('Será validado se existe um `ingredient-search-radio`', () => {
    renderWithRouter(<Foods />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const ingredient = screen.getByTestId(ingredientButton);
    expect(ingredient).toBeInTheDocument();
  });
  it('Será validado se existe um `name-search-radio`', () => {
    renderWithRouter(<Foods />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const name = screen.getByTestId(nameButton);
    expect(name).toBeInTheDocument();
  });
  it('Será validado se existe um `first-letter-search-radio`', () => {
    renderWithRouter(<Foods />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const firstletter = screen.getByTestId(firstLetterButton);
    expect(firstletter).toBeInTheDocument();
  });
  it('Será validado se existe um `exec-search-btn`', () => {
    renderWithRouter(<Foods />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const searchBtn = screen.getByTestId(execButton);
    expect(searchBtn).toBeInTheDocument();
  });
});

describe(`14 - Posicione a barra logo abaixo do header e
  implemente 3 radio buttons: Ingredient, Name e First letter`, () => {
  it(`Se o radio selecionado for Ingredient,
  a busca na API é feita corretamente pelo ingrediente`, async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_FOOD),
    });
    renderWithRouter(<Foods />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    userEvent.type(searchInput, 'Banana');
    const ingredient = screen.getByTestId(ingredientButton);
    const searchBtn = screen.getByTestId(execButton);
    userEvent.click(ingredient);
    userEvent.click(searchBtn);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=Banana');
  });

  it(`Se o radio selecionado for Name, 
    a busca na API é feita corretamente pelo nome`, () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_FOOD),
    });
    renderWithRouter(<Foods />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    userEvent.type(searchInput, 'Banana');
    const name = screen.getByTestId(nameButton);
    const searchBtn = screen.getByTestId(execButton);
    userEvent.click(name);
    userEvent.click(searchBtn);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=Banana');
  });

  it(`Se o radio selecionado for First letter,
    a busca na API é feita corretamente pelo primeira letra`, () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_FOOD),
    });
    renderWithRouter(<Foods />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    userEvent.type(searchInput, 'o');
    const firstLetter = screen.getByTestId(firstLetterButton);
    const searchBtn = screen.getByTestId(execButton);
    userEvent.click(firstLetter);
    userEvent.click(searchBtn);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?f=o');
  });

  it(`Se o radio selecionado for First letter e a busca na API
    for feita com mais de uma letra, deve-se exibir um alert`, () => {
    jest.spyOn(global, 'alert');
    global.alert.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_FOOD),
    });
    renderWithRouter(<Foods />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    userEvent.type(searchInput, 'oo');
    const firstLetter = screen.getByTestId(firstLetterButton);
    const searchBtn = screen.getByTestId(execButton);
    userEvent.click(firstLetter);
    userEvent.click(searchBtn);
    expect(global.alert).toBeCalledTimes(1);
    expect(global.alert).toBeCalledWith('Your search must have only 1 (one) character');
  });
});

describe(`15 - Busque na API de comidas caso a pessoa esteja na página
  de comidas e na de bebidas caso esteja na de bebidas`, () => {
  it(`Na tela de bebidas, se o radio selecionado for Ingredient,
  a busca na API é feita corretamente pelo ingrediente`, () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_DRINK),
    });
    renderWithRouter(<Drinks />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    userEvent.type(searchInput, 'Banana');
    const ingredient = screen.getByTestId(ingredientButton);
    const searchBtn = screen.getByTestId(execButton);
    userEvent.click(ingredient);
    userEvent.click(searchBtn);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Banana');
  });

  it(`Na tela de bebidas, se o radio selecionado for Name,
    a busca na API é feita corretamente pelo nome`, () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_DRINK),
    });
    renderWithRouter(<Drinks />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    userEvent.type(searchInput, 'Banana');
    const name = screen.getByTestId(nameButton);
    const searchBtn = screen.getByTestId(execButton);
    userEvent.click(name);
    userEvent.click(searchBtn);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Banana');
  });
});

describe(`16 - Redirecione para a tela de detalhes da receita caso
  apenas uma receita seja encontrada, com o ID da mesma na URL`, () => {
  it(`Caso apenas uma comida seja encontrada,
    deve-se ir para sua rota de detalhes`, () => {
    /* jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_FOOD),
    });
    const { history } = renderWithRouter(<Foods />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    userEvent.type(searchInput, 'Banana');
    const name = screen.getByTestId(nameButton);
    const searchBtn = screen.getByTestId(execButton);
    userEvent.click(name);
    userEvent.click(searchBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/foods/1'); */
  });

  it(`Caso apenas uma bebida seja encontrada,
    deve-se ir para sua rota de detalhes`, () => {
    /* jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_DRINK),
    });
    const { history } = renderWithRouter(<Drinks />);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    userEvent.type(searchInput, 'Banana');
    const name = screen.getByTestId(nameButton);
    const searchBtn = screen.getByTestId(execButton);
    userEvent.click(name);
    userEvent.click(searchBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/drinks/2'); */
  });
});

describe(`17 - Mostre as receitas em cards caso
  mais de uma receita seja encontrada`, () => {
  it('Caso mais de uma comida seja encontrada, mostrar as 12 primeiras', () => {

  });

  it('Caso mais de uma bebida seja encontrada, mostrar as 12 primeiras', () => {

  });
});

describe('18 - Exiba um `alert` caso nenhuma receita seja encontrada', () => {
  it('Caso nenhuma comida seja encontrada o alert deve ser exibido', () => {

  });

  it('Caso nenhuma bebida seja encontrada o alert deve ser exibido', () => {

  });
});
