import { CHANGE_SEARCHFIELD } from '../actions/types';

const initialState = {
  searchField: ''
};

const searchRobots = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCHFIELD:
      return {
        ...state,
        searchField: payload
      };

    default:
      return state;
  }
};

export default searchRobots;
