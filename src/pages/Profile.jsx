import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Profile.css';

export default function Profile() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      const user = JSON.parse(userStorage);
      setEmail(user.email);
    }
  }, []);

  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Header title="Profile" search={ false } profile />
      <p className="email-profile" data-testid="profile-email">{ `Email: ${email}` }</p>
      <div className="profile-container">
        <Link to="/done-recipes">
          <button
            className="profile-button"
            type="button"
            data-testid="profile-done-btn"
          >
            Done Recipes
          </button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            className="profile-button"
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            className="profile-button"
            type="button"
            data-testid="profile-logout-btn"
            onClick={ handleClick }
          >
            Logout
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
