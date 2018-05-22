import React from 'react';
import BikeMap from './bike_map';
import FeaturedBikeItem from '../featured_bikes/featured_bike_item';
import SearchBar from './search_bar.jsx';

const Search = ({bikes, city, updateFilter}) => (
  <div className="bar-and-botton">
    <div className="top-half">
      <SearchBar updateFilter={updateFilter}/>
    </div>
  <div className="map-and-results">
    <div className ="left-half">
      <BikeMap
        updateFilter={updateFilter}
        bikes={bikes}
        city={city}
        />
    </div>
    <div className="right-half">
      <h2>Search Results</h2>
      <ul className="featured-bikes-list">
        {bikes.map(bike => <FeaturedBikeItem key = {bike.id} bike = {bike} />)}
      </ul>
    </div>
  </div>
</div>
);


export default Search;
