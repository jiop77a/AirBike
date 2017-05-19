import { merge } from 'lodash';

import {
  RECEIVE_BIKE
} from '../actions/bike_actions';

// const defaultBike = {
//  reviews: [],
//  bookings: []
// };

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BIKE:
      return merge({}, action.bike);
    default:
    return state;
      
  }
};
