import { combineReducers } from 'redux';

import BikeDetailReducer from './bike_detail_reducer';
import SessionReducer from './session_reducer';
import BikesReducer from './bikes_reducer';

const RootReducer = combineReducers({
  bikes: BikesReducer,
  bikeDetail: BikeDetailReducer,
  session: SessionReducer
});

export default RootReducer;
