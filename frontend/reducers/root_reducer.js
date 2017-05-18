
import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BikesReducer from './bikes_reducer';

const RootReducer = combineReducers({
  bikes: BikesReducer,
  session: SessionReducer
});

export default RootReducer;
