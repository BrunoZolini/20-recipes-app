import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipediaLogo from '../images/RecipediaLogo.png';
import '../styles/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const SIX = 6;
    if (password.length > SIX && emailRegex.test(email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const userEmail = { email };
    localStorage.setItem('user', JSON.stringify(userEmail));
    history.push('/foods');
  };

  return (
    <div className="login-section">
      <form className="login-form">
        <img className="login-logo" src={ RecipediaLogo } alt="RecipediaLogo" />
        <input
          className="input-login"
          data-testid="email-input"
          placeholder="Email"
          type="email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          className="input-login"
          data-testid="password-input"
          type="password"
          placeholder="Password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          className="button-login"
          type="submit"
          data-testid="login-submit-btn"
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          Enter
        </button>
      </form>
      <p className="login-copyright">
        Copyright © 2022 Grupo 19 - Turma XP - Todos os direitos reservados
      </p>
    </div>
  );
}
