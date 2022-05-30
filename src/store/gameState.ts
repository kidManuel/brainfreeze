import { GameState } from '../sharedTypes';
import { StoreSlice } from './helperTypes';

export interface IGameStateSlice {
  gameState: GameState;
  setCurrentAction: (newState: GameState) => void;
  startPlacing: () => void;
}

export const createGameStateSlice: StoreSlice<IGameStateSlice> = (set) => ({
  gameState: GameState.DEFAULT,
  setCurrentAction: (newState) => {
    set((state) => ({ ...state, gameState: newState }));
  },
  startPlacing: () => {
    set((state) => ({ ...state, gameState: GameState.PLACING_BUILDING }));
  },
});
