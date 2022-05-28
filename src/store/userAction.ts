import { UserActionState } from '../types';
import { StoreSlice } from './helperTypes';

export interface IUserActionSlice {
  current: UserActionState;
  setCurrentAction: (newState: UserActionState) => void;
  startPlacing: () => void;
}

export const createUserActionSlice: StoreSlice<IUserActionSlice> = (set, get) => ({
  current: UserActionState.DEFAULT,
  setCurrentAction: (newState) => {
    set((state) => ({ ...state, current: newState }));
  },
  getCurrentAction: () => get().current,
  startPlacing: () => {
    set((state) => ({ ...state, current: UserActionState.DRAGGING }));
  },
});
