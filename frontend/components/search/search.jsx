import React from 'react';
import BikeMap from './bike_map';

const Search = ({bikes, fetchAllBikes}) => (
  <div className="map-and-results">
    <div className = "left-half">
      <BikeMap
        fetchAllBikes={fetchAllBikes}
        bikes={bikes}
        />
    </div>

  </div>
);


export default Search;
