import merge from 'lodash/merge';

import { RECEIVE_BOOKINGS, REMOVE_BOOKING, RECEIVE_BOOKING_ERRORS, CLEAR_BOOKING_ERRORS } from '../actions/booking_actions';

const defaultState = {
  bookings: {},
  errors: []
};

const BookingsReducer = (state = defaultState, action) => {
  let newState = merge({}, state);

  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOKINGS:
      newState.bookings = action.bookings;
      return newState;
    case REMOVE_BOOKING:
      delete newState.bookings[action.booking.id];
      return newState;
    case RECEIVE_BOOKING_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_BOOKING_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default BookingsReducer;
