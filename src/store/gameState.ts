import { GameState } from '../sharedTypes';
import { StoreSlice } from './helperTypes';

export interface IGameStateSlice {
  current: GameState;
  setCurrentAction: (newState: GameState) => void;
  startPlacing: () => void;
}

export const createGameStateSlice: StoreSlice<IGameStateSlice> = (set, get) => ({
  current: GameState.DEFAULT,
  setCurrentAction: (newState) => {
    set((state) => ({ ...state, current: newState }));
  },
  getCurrentAction: () => get().current,
  startPlacing: () => {
    set((state) => ({ ...state, current: GameState.DRAGGING }));
  },
});
