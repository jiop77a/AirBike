import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  "San Francisco": {
    center: {
      lat: 37.773972,
      lng: -122.431297
    },
    zoom: 12
  },
  "Oakland": {
    center: {
      lat: 37.812875,
      lng: -122.274047,
    },
    zoom: 13
  },
  "Berkeley": {
    center: {
      lat: 37.867512,
      lng: -122.267915,
    },
    zoom: 13
  },
};

class BikeMap extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions[this.props.city]);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.bikes);
  }

  componentWillReceiveProps(newProps){
    this.map.setCenter(mapOptions[newProps.city].center);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.bikes);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
  }

  handleMarkerClick(bike) {
    this.props.history.push(`bikes/${bike.id}`);
  }

  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(BikeMap);
