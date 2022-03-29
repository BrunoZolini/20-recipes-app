import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../service/renderWithRouter';
import Login from '../pages/Login';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const SUBMIT_BUTTON = 'login-submit-btn';
const USER_MAIL = 'teste@teste.com';

describe('2 - Crie um componente chamado `Login`', () => {
  it('Será validado se existe um `input-email`', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    expect(inputEmail).toBeInTheDocument();
  });

  it('Será validado se existe um `input-password`', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    expect(inputPassword).toBeInTheDocument();
  });

  it('Será validado se existe um `login-submit-btn`', () => {
    render(<Login />);
    const submitButton = screen.getByTestId(SUBMIT_BUTTON);
    expect(submitButton).toBeInTheDocument();
  });
});

describe('3 - Verificar se é possível escrever no "input" de email', () => {
  it('Será validado se é possível escrever no "input" de email', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    userEvent.type(inputEmail, 'teste1@teste.com');
    expect(inputEmail).toHaveValue('teste1@teste.com');
  });
});

describe('4 - Verificar se é possível escrever no "input" de senha', () => {
  it('Será validado se é possível escrever no "input" de senha', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    userEvent.type(inputPassword, '1234567');
    expect(inputPassword).toHaveValue('1234567');
  });
});

describe('5 - Verificar se o botão está desativado ao renderizar a tela Login', () => {
  it('Será validado se o botão será ativado após preenchimento dos campos', () => {
    render(<Login />);

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const submitButton = screen.getByTestId(SUBMIT_BUTTON);

    expect(submitButton).toBeDisabled();
    userEvent.type(inputEmail, 'teste@teste');
    expect(submitButton).toBeDisabled();
    userEvent.type(inputEmail, USER_MAIL);
    userEvent.type(inputPassword, '1234567');
    expect(submitButton).not.toBeDisabled();
  });
});

describe(`6 - Salve 2 tokens no localStorage após a submissão, identificados pelas 
      chaves mealsToken e cocktailsToken`, () => {
  it(`Após a submissão mealsToken e cocktailsToken 
      devem estar salvos em localStorage`, () => {
    renderWithRouter(<Login />);

    const submitButton = screen.getByTestId(SUBMIT_BUTTON);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);

    expect(submitButton).toBeDisabled();
    userEvent.type(inputEmail, 'teste@teste');
    expect(submitButton).toBeDisabled();
    userEvent.type(inputEmail, USER_MAIL);
    userEvent.type(inputPassword, '1234567');
    expect(submitButton).not.toBeDisabled();
    userEvent.click(submitButton);
    expect(localStorage.getItem('mealsToken')).toEqual('1');
    expect(localStorage.getItem('cocktailsToken')).toEqual('1');
  });
});

describe(`7 - Salve o e-mail da pessoa usuária no localStorage 
      na chave user após a submissão`, () => {
  it('Após a submissão a chave user deve estar salva em localStorage', () => {
    renderWithRouter(<Login />);

    const submitButton = screen.getByTestId(SUBMIT_BUTTON);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const userEmail = { email: USER_MAIL };

    userEvent.type(inputEmail, USER_MAIL);
    userEvent.type(inputPassword, '1234567');
    userEvent.click(submitButton);
    expect(localStorage.getItem('user')).toEqual(JSON.stringify(userEmail));
  });
});

describe(`8 - Redirecione a pessoa usuária para a tela principal de 
        receitas de comidas após a submissão e validação com sucesso do login`, () => {
  it('A rota muda para a tela principal de receitas de comidas', () => {
    const { history } = renderWithRouter(<Login />);

    const submitButton = screen.getByTestId(SUBMIT_BUTTON);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);

    userEvent.type(inputEmail, USER_MAIL);
    userEvent.type(inputPassword, '1234567');
    userEvent.click(submitButton);

    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
