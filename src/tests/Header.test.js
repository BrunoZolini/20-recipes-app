import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../service/renderWithRouter';
import Header from '../components/Header';

const BUTTON_PROFILE = 'profile-top-btn';
const PAGE_TITLE = 'page-title';
const SEARCH_BUTTON = 'search-top-btn';

describe(`9 - Implemente os elementos do header na tela principal de receitas, 
  respeitando os atributos descritos no protótipo`, () => {
  it('Tem os data-testids profile-top-btn, page-title e search-top-btn', () => {
    renderWithRouter(<Header />);
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

// it('Não tem header na tela de login', () => {

// });

// it('O header tem os ícones corretos na tela de principal de receitas de comidas', () => {

// });

// it('O header tem os ícones corretos na tela de principal de receitas de bebidas', () => {

// });

// it('Não tem header na tela de detalhes de uma receita de comida', () => {

// });

// it('Não tem header na tela de detalhes de uma receita de bebida', () => {

// });

// it('Não tem header na tela de receita em progresso de comida', () => {

// });

// it('Não tem header na tela de receita em progresso de bebida', () => {

// });

// it('O header tem os ícones corretos na tela de explorar', () => {

// });

// it('O header tem os ícones corretos na tela de explorar comidas', () => {

// });

// it('O header tem os ícones corretos na tela de explorar bebidas', () => {

// });

// it('O header tem os ícones corretos na tela de explorar comidas por ingrediente', () => {

// });

// it('O header tem os ícones corretos na tela de explorar bebidas por ingrediente', () => {

// });

// it('O header tem os ícones corretos na tela de explorar comidas por nacionalidade', () => {

// });

// it('O header tem os ícones corretos na tela de perfil', () => {

// });

// it('O header tem os ícones corretos na tela de receitas feitas', () => {

// });

// it('O header tem os ícones corretos na tela de receitas favoritas', () => {

// });
