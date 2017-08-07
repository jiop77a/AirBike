/* globals google */

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(bikes){
    const bikesObj = {};
    bikes.forEach(bike => {bikesObj[bike.id] = bike;}
    );

    bikes
      .filter(bike => !this.markers[bike.id])
      .forEach(newBike => this.createMarkerFromBike(newBike));

    Object.keys(this.markers)
      .filter(bikeId => !bikesObj[bikeId])
      .forEach((bikeId) => this.removeMarker(this.markers[bikeId]));
   }

  createMarkerFromBike(bike) {
    const position = new google.maps.LatLng(bike.lat, bike.lng);
    const image = {
      url: 'https://res.cloudinary.com/dol1mm8bd/image/upload/v1502131413/8071_yxilab.png',
      scaledSize: new google.maps.Size(60,60),
    };
    const marker = new google.maps.Marker({
      position,
      animation: google.maps.Animation.DROP,
      map: this.map,
      bikeId: bike.id,
      icon: image
    });

    marker.addListener('click', () => this.handleClick(bike));
    this.markers[bike.id] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.bikeId].setMap(null);
    delete this.markers[marker.bikeId];
  }

}

export default MarkerManager;
