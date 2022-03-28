import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from '../App';
import Login from '../pages/Login';

describe('2 - Crie um componente chamado `Login`', () => {
  it('Será validado se existe uma `input` que possui o data-testid="email-input"', () => {
    render(<Login />);
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
  });

  it(`Será validado se existe uma 'input' que possui o 
      data-testid="password-input"`, () => {
    render(<Login />);
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });

  it(`Será validado se existe um 'button' que possui o 
      data-testid="login-submit-btn"`, () => {
    render(<Login />);
    expect(screen.getByTestId('login-submit-btn')).toBeInTheDocument();
  });
});
