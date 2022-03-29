import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const SIX = 6;
    if (password.length > SIX && emailRegex.test(email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const userEmail = { email };
    localStorage.setItem('user', JSON.stringify(userEmail));
    history.push('/foods');
  };

  return (
    <div>
      <form>
        <input
          data-testid="email-input"
          placeholder="email"
          type="email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          Enter
        </button>
      </form>
    </div>
  );
}
