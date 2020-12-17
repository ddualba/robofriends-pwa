import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  CHANGE_SEARCHFIELD
} from '../actions/types';

import * as reqReducers from './requestRobots';
import reducers from './searchRobots';

// describe('searchRobots', () => {
// const initialStateSearch = {
//   searchField: ''
// };

test('should return the initial state', () => {
  expect(reducers.searchRobots(undefined, {})).toEqual({
    searchField: ''
  });
});

// it('should handle CHANGE_SEARCHFIELD', () => {
//   expect(
//     reducers.searchRobots(initialStateSearch, {
//       type: CHANGE_SEARCHFIELD,
//       payload: 'abc'
//     })
//   ).toEqual({
//     searchField: 'abc'
//   });
// });

// });

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false
  };

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reqReducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reqReducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'Tester',
            email: 'tester@gmail.com'
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: '123',
          name: 'Tester',
          email: 'tester@gmail.com'
        }
      ],
      isPending: false
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reqReducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOOOOOOO!'
      })
    ).toEqual({
      error: 'NOOOOOOOO!',
      robots: [],
      isPending: false
    });
  });
});
