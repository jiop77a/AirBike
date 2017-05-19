import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FeaturedBikeItem from './featured_bike_item';

class FeaturedBikes extends Component {
  componentDidMount() {
    this.props.fetchBikes();
  }

  render() {
    const { bikes } = this.props;

    return(
      <section className="featured-bikes">
        <ul>
          {bikes.map(bike => <FeaturedBikeItem key = {bike.id} bike = {bike} />)}
        </ul>
      </section>
    );
  }
}

export default FeaturedBikes;
