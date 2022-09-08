import types from '../actionTypes';

const initialState = [];

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${types.SET_GAMES}/fulfilled`:
      return action.payload;
    case `${types.SET_GAMESBYID}/fulfilled`:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default gameReducer;
