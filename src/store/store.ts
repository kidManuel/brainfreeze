import { configureStore } from '@reduxjs/toolkit';
import userAction from './userAction';

export const store = configureStore({
  reducer: {
    userAction,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
