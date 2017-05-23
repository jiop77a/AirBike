import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class BikeMap extends React.Component {
  componentDidMount() {
    this.props.fetchAllBikes();
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.bikes);
    console.log(this.MarkerManager.markers);
    console.log(this.props.bikes);
}
// this.handleMarkerClick.bind(this));

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.bikes);
    console.log(this.props.bikes);
}

  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default BikeMap;
