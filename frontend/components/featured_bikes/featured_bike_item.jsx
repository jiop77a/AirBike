import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedBikeItem = ({ bike }) => (
  <li className="featured-bike-item">
    <Link to={`/bikes/${bike.id}`}>
      <img src={bike.picture_url} alt={bike.description} />
      <div className="featured-bike-label">
        <div className="featured-cost-description">
          <p>${bike.cost}</p><p> {bike.description}</p>
        </div>
        <div className="featured-city">
          <span><strong>{bike.city}</strong></span>
        </div>
      </div>
    </Link>
  </li>
);

export default FeaturedBikeItem;
