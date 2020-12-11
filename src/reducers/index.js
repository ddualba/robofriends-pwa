import { combineReducers } from 'redux';
import searchRobots from './searchRobots';
import reqRobots from './requestRobots';

// name below define what your state buckets are called
export default combineReducers({
  searchRobots,
  reqRobots
});
