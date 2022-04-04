import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    const user = JSON.parse(userStorage);
    setEmail(user.email);
  });

  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Header title="Profile" search={ false } profile />
      <p data-testid="profile-email">{ email }</p>
      <Link to="/done-recipes">
        <button type="button" data-testid="profile-done-btn">
          Done Recipes
        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button type="button" data-testid="profile-favorite-btn">
          Favorite Recipes
        </button>
      </Link>
      <Link to="/">
        <button type="button" data-testid="profile-logout-btn" onClick={ handleClick }>
          Logout
        </button>
      </Link>
      <Footer />
    </div>
  );
}
