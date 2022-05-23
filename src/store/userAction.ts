import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

enum UserActionState {
  DEFAULT,
  DRAGGING,
  PLACING_BUILDING,
  PAUSED
}

interface CounterState {
  action: UserActionState
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

export const getUserActionState = (state: RootState) => state.userAction.action;

export default userActionSlice.reducer;
