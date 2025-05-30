import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { dataSlice } from './dataSlice';
import { mainScreenSlice } from './mainScreenSlice';

export const rootReducer = combineReducers({
  'data': dataSlice.reducer,
  'mainScreen': mainScreenSlice.reducer,
  'user': userSlice.reducer,
});
