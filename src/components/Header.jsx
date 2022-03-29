import React from 'react';

export default function Header() {
  return (
    <div>
      <button
        type="button"
        data-testid="profile-top-btn"
      >
        Profile
      </button>
      <h3
        data-testid="page-title"
      >
        Title
      </h3>
      <button
        type="button"
        data-testid="search-top-btn"
      >
        search
      </button>
    </div>
  );
}
