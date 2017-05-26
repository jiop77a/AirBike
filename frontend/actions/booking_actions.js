import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const removeBooking = booking => ({
  type: REMOVE_BOOKING,
  booking
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS
});

export const fetchBookings = user_id => dispatch => (
  APIUtil.fetchBookings(user_id).then(bookings => (
    dispatch(receiveBookings(bookings))
  ))
);

export const createBooking = newBooking => dispatch => (
  APIUtil.createBooking(newBooking).then(booking => (
    dispatch(receiveBooking(booking))
  ), err => (dispatch(receiveBookingErrors(err.responseJSON))
  ))
);

export const deleteBooking = id => dispatch => (
  APIUtil.destroyBooking(id).then(booking => (
    dispatch(removeBooking(booking)))
));
