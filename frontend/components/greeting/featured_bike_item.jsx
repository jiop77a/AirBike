import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedBikeItem = ({ bike }) => (
  <li className="featured-bike-item">
    <Link to={`/bikes/${bike.id}`}>
      <span>${bike.cost}</span>
      <span>{bike.city}</span>
      <img src={bike.image_url} alt={bike.description} />
    </Link>
  </li>
);

export default FeaturedBikeItem;
