import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const SUBMIT_BUTTON = 'login-submit-btn';

describe('2 - Crie um componente chamado `Login`', () => {
  it('Será validado se existe uma `input` que possui o data-testid', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    expect(inputEmail).toBeInTheDocument();
  });

  it(`Será validado se existe uma 'input' que possui o 
      data-testid="password-input"`, () => {
    render(<Login />);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    expect(inputPassword).toBeInTheDocument();
  });

  it(`Será validado se existe um 'button' que possui o 
      data-testid="login-submit-btn"`, () => {
    render(<Login />);
    const submitButton = screen.getByTestId(SUBMIT_BUTTON);
    expect(submitButton).toBeInTheDocument();
  });
});

describe('3 - Verificar se é possível escrever no "input" de email', () => {
  it(`Será validado se existe uma 'input' que possui o 
      data-testid="email-input"`, () => {
    render(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    userEvent.type(inputEmail, 'teste1@teste.com');
    expect(inputEmail).toHaveValue('teste1@teste.com');
  });
});

describe('4 - Verificar se é possível escrever no "input" de senha', () => {
  it(`Será validado se existe um 'input' que possui o 
      data-testid="password-input"`, () => {
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
    userEvent.type(inputEmail, 'teste@teste.com');
    userEvent.type(inputPassword, '1234567');
    expect(submitButton).not.toBeDisabled();
  });
});
