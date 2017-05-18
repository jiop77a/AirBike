import * as APIUtil from '../util/bike_api_util';

export const RECEIVE_BIKES = 'RECEIVE_BIKES';
export const RECEIVE_BIKE = 'RECEIVE_BIKE';

export const receiveBikes = bikes => ({
  type: RECEIVE_BIKES,
  bikes
});

export const receiveBike = bike => ({
  type: RECEIVE_BIKE,
  bike
});

export const fetchBikes = () => dispatch => (
  APIUtil.fetchBikes().then(bikes => (
    dispatch(receiveBikes(bikes))
  ))
);

export const fetchBike = id => dispatch => (
  APIUtil.fetchBike(id).then(bike => (
    dispatch(receiveBike(bike))
  ))
);
