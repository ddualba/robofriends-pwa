import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../actions/types';

const initialState = {
  isPending: false,
  robots: [],
  error: ''
};

const requestRobots = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: payload,
        isPending: false
      };
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        error: payload,
        isPending: false
      };
    default:
      return state;
  }
};

export default requestRobots;
