import { merge } from 'lodash';

import {
  RECEIVE_BIKE,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  RECEIVE_ERRORS
} from '../actions/bike_actions';

const defaultBike = {
 reviews: {},
 errors: []
};

export default (state = defaultBike, action) => {
  let newBike = merge({}, state);

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BIKE:
      return merge({}, action.bike);
    case RECEIVE_REVIEW:
      newBike.reviews[action.review.id] = action.review;
      return newBike;
    case REMOVE_REVIEW:
      delete newBike.reviews[action.review.id];
      return newBike;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultBike, {
        errors
      });
    default:
      return state;

  }
};
