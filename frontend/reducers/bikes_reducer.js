import merge from 'lodash/merge';

import { RECEIVE_BIKES } from '../actions/bike_actions';

const BikesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_BIKES:
      return action.bikes;
    default:
      return state;
  }
};

export default BikesReducer;
