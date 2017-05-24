import { combineReducers } from 'redux';

import BikeDetailReducer from './bike_detail_reducer';
import SessionReducer from './session_reducer';
import BikesReducer from './bikes_reducer';
import FiltersReducer from './filters_reducer';

const RootReducer = combineReducers({
  bikes: BikesReducer,
  bikeDetail: BikeDetailReducer,
  session: SessionReducer,
  filters: FiltersReducer
});

export default RootReducer;
