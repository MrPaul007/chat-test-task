import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import initialUsers from 'shared/initialUsersData/initialUsersData.json';

const initialState = {
  users: initialUsers,
};

const getCurrentTime = () => {
  const today = new Date();
  const date =
    today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
  const time = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return date + ' ' + time;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    sort: (store, { payload }) => {
      store.users = payload;
    },
    addMessage: {
      reducer: (store, { payload }) => {
        const { index, message } = payload;
        store.users[index].messages.push(message);
      },
      prepare: data => {
        const { index, text } = data;
        return {
          payload: {
            index: index,
            message: {
              id: nanoid(),
              route: 'income',
              text: text,
              time: getCurrentTime(),
            },
          },
        };
      },
    },
    getMessage: {
      reducer: (store, { payload }) => {
        const { index, message } = payload;
        store.users[index].messages.push(message);
      },
      prepare: data => {
        const { index, outcomeText } = data;
        return {
          payload: {
            index: index,
            message: {
              id: nanoid(),
              route: 'outcome',
              text: outcomeText,
              time: getCurrentTime(),
            },
          },
        };
      },
    },

    changeFilter: (store, { payload }) => {
      store.filter = payload;
    },
  },
});

export const { sort, addMessage, getMessage } = usersSlice.actions;

export default usersSlice.reducer;
