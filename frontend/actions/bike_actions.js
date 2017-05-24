import * as APIUtil from '../util/bike_api_util';

export const RECEIVE_BIKES = 'RECEIVE_BIKES';
export const RECEIVE_BIKE = 'RECEIVE_BIKE';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const receiveBikes = bikes => ({
  type: RECEIVE_BIKES,
  bikes
});

export const receiveBike = bike => ({
  type: RECEIVE_BIKE,
  bike
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

export const fetchBikes = () => dispatch => (
  APIUtil.fetchBikes().then(bikes => (
    dispatch(receiveBikes(bikes))
  ))
);

export const searchBikes = data => dispatch => (
  APIUtil.fetchBikes(data).then(bikes => (
    dispatch(receiveBikes(bikes))
  ))
);

export const fetchBike = id => dispatch => (
  APIUtil.fetchBike(id).then(bike => (
    dispatch(receiveBike(bike))
  ))
);

export const createReview = newReview => dispatch => (
  APIUtil.createReview(newReview).then(review => (
    dispatch(receiveReview(review))
      ), err => (
        dispatch(receiveReviewErrors(err.responseJSON))
  ))
);

export const deleteReview = id => dispatch => (
  APIUtil.destroyReview(id).then(review => (
    dispatch(removeReview(review))
      )
  ));
