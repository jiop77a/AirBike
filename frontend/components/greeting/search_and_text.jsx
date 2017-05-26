import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export const SearchAndText = () => (
  <section className="search-and-text">
    <div className='promo-text'>
      <p className='welcome-line-1'>Welcome to <strong>AirBike!</strong></p>
      <p className='welcome-line-2'>The site that connects <strong>home mechanics</strong> to <strong>visiting enthusiasts</strong></p>
    </div>
    <div className='search-bar'>
      <Link to="/search" className="promo-button">Find a bike today!</Link>
    </div>
  </section>
);
