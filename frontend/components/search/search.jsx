import React from 'react';
import BikeMap from './bike_map';
import FeaturedBikeItem from '../featured_bikes/featured_bike_item';

const Search = ({bikes, fetchAllBikes}) => (
  <div className="map-and-results">
    <div className = "left-half">
      <BikeMap
        fetchAllBikes={fetchAllBikes}
        bikes={bikes}
        />
    </div>
    <div className="right-half">
      <h2>Search Results</h2>
      <ul className="featured-bikes-list">
        {bikes.map(bike => <FeaturedBikeItem key = {bike.id} bike = {bike} />)}
      </ul>
    </div>
  </div>
);


export default Search;
