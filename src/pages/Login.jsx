import React from 'react';

export default function Login() {
  return (
    <div>
      <form>
        <input data-testid="email-input" placeholder="email" type="email" />
        <input data-testid="password-input" type="password" placeholder="password" />
        <button type="submit" data-testid="login-submit-btn">Enter</button>
      </form>
    </div>
  );
}
