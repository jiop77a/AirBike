import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export const SearchAndText = () => (
  <section className="search-and-text">
    <div className="promo-text-container">
      <div className='promo-text'>
        <p className='welcome-line-1'>AirBike</p>
        <p className='welcome-line-2'>Connecting home mechanics to visiting enthusiasts.</p>
      </div>
    </div>
    <div className='search-bar'>
      <Link to="/search" className="promo-button">Find a bike today!</Link>
    </div>
  </section>
);
