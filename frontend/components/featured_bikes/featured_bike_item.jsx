import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeaturedBikeItem extends Component {
  //
  // createEllipsis(description) {
  //   if description.length
  // }
  //
  render() {
    const { bike } = this.props;

    return(
      <li className="featured-bike-item">
        <Link to={`/bikes/${bike.id}`}>
          <img src={bike.picture_url} alt={bike.description} />
          <div className="featured-bike-label">
            <div className="featured-cost-description">
              <label>${bike.cost}</label>
              <label>{bike.description}</label>
            </div>
            <div className="featured-city">
              <strong>{bike.city}</strong>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}


export default FeaturedBikeItem;
