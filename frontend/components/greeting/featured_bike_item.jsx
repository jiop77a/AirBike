import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedBikeItem = ({ bike }) => (
  <li className="featured-bike-item">
    <Link to={`/bikes/${bike.id}`}>
      <label className="featured-bike-label">
        <span>${bike.cost}</span>
        <span>{bike.city}</span>
      </label>
      <img src={bike.picture_url} alt={bike.description} />
    </Link>
  </li>
);

export default FeaturedBikeItem;
