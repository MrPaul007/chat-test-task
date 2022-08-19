import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  activeId: '',
  filter: '',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setLogin: (store, { payload }) => {
      store.isLogin = payload;
    },
    setActiveId: (store, { payload }) => {
      store.activeId = payload;
    },
    changeFilter: (store, { payload }) => {
      store.filter = payload;
    },
  },
});

export const { setLogin, setActiveId, changeFilter } = menuSlice.actions;

export default menuSlice.reducer;
