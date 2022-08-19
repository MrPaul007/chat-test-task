import { combineReducers } from '@reduxjs/toolkit';

import usersSlice from './users/users-slice';
import menuSlice from './menu/menu-slice';

const rootReducer = combineReducers({
  menu: menuSlice,
  users: usersSlice,
});

export default rootReducer;
