import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { RootState } from './store';

export enum UserActionState {
  DEFAULT,
  DRAGGING,
  PLACING_BUILDING,
  PAUSED,
}

interface CounterState {
  action: UserActionState;
}

const initialState: CounterState = {
  action: UserActionState.DEFAULT,
};

export const userActionSlice = createSlice({
  name: 'userAction',
  initialState,
  reducers: {
    startPlacing: (state) => {
      state.action = UserActionState.PLACING_BUILDING;
    },
  },
});

export const { startPlacing } = userActionSlice.actions;

export const useActionStateSelector = (state: RootState) => state.userAction.action;

export default userActionSlice.reducer;
