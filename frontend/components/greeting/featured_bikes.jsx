import React, { Component } from 'react';
import FeaturedBikeItem from './featured_bike_item';

class FeaturedBikes extends Component {
  componentDidMount() {
    this.props.fetchBikes();
  }

  render() {
    const { bikes } = this.props;

    return(
      <section className="featured-bikes-container">
        <h2>Featured</h2>
        <ul className="featured-bikes-list">
          {bikes.map(bike => <FeaturedBikeItem key = {bike.id} bike = {bike} />)}
        </ul>
      </section>
    );
  }
}

export default FeaturedBikes;
