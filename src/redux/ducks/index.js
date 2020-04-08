import { combineReducers } from 'redux';

import profile from './profile';
import places from './places';

const createRootReducer = () => combineReducers({
  profile,
  places,
});

export default createRootReducer;
