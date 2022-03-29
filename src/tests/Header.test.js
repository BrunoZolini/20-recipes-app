import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../service/renderWithRouter';
// import Header from '../components/Header';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import FoodsDetails from '../pages/FoodsDetails';
import DrinksDetails from '../pages/DrinksDetails';
import FoodsDetailsInProgress from '../pages/FoodsDetailsInProgress';
import DrinksDetailsInProgress from '../pages/DrinksDetailsInProgress';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoodsIngredients from '../pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from '../pages/ExploreDrinksIngredients';
import ExploreFoodsNationalities from '../pages/ExploreFoodsNationalities';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';

const BUTTON_PROFILE = 'profile-top-btn';
const PAGE_TITLE = 'page-title';
const SEARCH_BUTTON = 'search-top-btn';

describe(`9 - Implemente os elementos do header na tela principal de receitas, 
  respeitando os atributos descritos no protótipo`, () => {
  it('Tem os data-testids profile-top-btn, page-title e search-top-btn', () => {
    renderWithRouter(<Foods />);
    const buttonProfile = screen.getByTestId(BUTTON_PROFILE);
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const searchButton = screen.getByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});

describe(`10 - Implemente um ícone para a tela de perfil, 
  um título e um ícone para a busca, caso exista no protótipo`, () => {
  it('Não tem header na tela de login', () => {
    renderWithRouter(<Login />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });
  it(`O header tem os ícones corretos
    na tela de principal de receitas de comidas`, () => {
    renderWithRouter(<Foods />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Foods/i);
    expect(searchButton).toBeInTheDocument();
  });
  it(`O header tem os ícones corretos na tela
    de principal de receitas de bebidas`, () => {
    renderWithRouter(<Drinks />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Drinks/i);
    expect(searchButton).toBeInTheDocument();
  });
  it('Não tem header na tela de detalhes de uma receita de comida', () => {
    renderWithRouter(<FoodsDetails />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });
  it('Não tem header na tela de detalhes de uma receita de bebida', () => {
    renderWithRouter(<DrinksDetails />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });
  it('Não tem header na tela de receita em progresso de comida', () => {
    renderWithRouter(<FoodsDetailsInProgress />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });
  it('Não tem header na tela de receita em progresso de bebida', () => {
    renderWithRouter(<DrinksDetailsInProgress />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de explorar', () => {
    renderWithRouter(<Explore />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Explore/i);
    expect(searchButton).not.toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de explorar comidas', () => {
    renderWithRouter(<ExploreFoods />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Explore Foods/i);
    expect(searchButton).not.toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de explorar bebidas', () => {
    renderWithRouter(<ExploreDrinks />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Explore Drinks/i);
    expect(searchButton).not.toBeInTheDocument();
  });
  it(`O header tem os ícones corretos na tela de explorar
    comidas por ingrediente`, () => {
    renderWithRouter(<ExploreFoodsIngredients />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Explore Ingredients/i);
    expect(searchButton).not.toBeInTheDocument();
  });
  it(`O header tem os ícones corretos na tela de explorar
    bebidas por ingrediente`, () => {
    renderWithRouter(<ExploreDrinksIngredients />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Explore Ingredients/i);
    expect(searchButton).not.toBeInTheDocument();
  });
  it(`O header tem os ícones corretos na tela de explorar
    comidas por nacionalidade`, () => {
    renderWithRouter(<ExploreFoodsNationalities />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Explore Nationalities/i);
    expect(searchButton).toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de perfil', () => {
    renderWithRouter(<Profile />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Profile/i);
    expect(searchButton).not.toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de receitas feitas', () => {
    renderWithRouter(<DoneRecipes />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Done Recipes/i);
    expect(searchButton).not.toBeInTheDocument();
  });
  it('O header tem os ícones corretos na tela de receitas favoritas', () => {
    renderWithRouter(<FavoriteRecipes />);

    const buttonProfile = screen.queryByTestId(BUTTON_PROFILE);
    const pageTitle = screen.queryByTestId(PAGE_TITLE);
    const searchButton = screen.queryByTestId(SEARCH_BUTTON);

    expect(buttonProfile).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/Favorite Recipes/i);
    expect(searchButton).not.toBeInTheDocument();
  });
});

describe(`11 - Redirecione a pessoa usuária para a tela de perfil 
  ao clicar no botão de perfil`, () => {
  it('A mudança de tela ocorre corretamente', () => {

  });
});

describe(`12 - Desenvolva o botão de busca que, ao ser clicado, 
  a barra de busca deve aparecer. O mesmo serve para escondê-la`, () => {
  it('Ao clicar no botão de busca pela primeira vez a barra de busca aparece', () => {

  });

  it('Ao clicar no botão de busca pela segunda vez a barra de busca desaparece', () => {

  });
});
