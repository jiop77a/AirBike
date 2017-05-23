import React from 'react';
import BikeMap from './bike_map';

const Search = ({bikes}) => (
  <div className="map-and-results">
    <div className = "left-half">
      <BikeMap
        bikes={bikes}
        />
    </div>

  </div>
);


export default Search;
