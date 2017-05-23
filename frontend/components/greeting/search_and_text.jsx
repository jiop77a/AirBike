import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export const SearchAndText = () => (
  <section className="search-and-text">
    <div className='promo-text'>
      <p className='welcome-line-1'>Welcome to Airbike!</p>
      <p className='welcome-line-2'>The site that connects home mechanics to visiting enthusiasts</p>
    </div>
    <div className='search-bar'>
      <Link to="/search" className="header-button">Search</Link>
    </div>
  </section>
);
