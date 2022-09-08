import { combineReducers } from '@reduxjs/toolkit';
import games from './gamesReducer';

const rootReducer = combineReducers({
  games,
});

export default rootReducer;
