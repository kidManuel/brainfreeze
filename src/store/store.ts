import create, { SetState, GetState } from 'zustand';
import { createStructuresSlice, IStructsSlice } from './structures';
import { createGameStateSlice, IGameStateSlice } from './gameState';

export const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createGameStateSlice(set, get),
  ...createStructuresSlice(set, get),
});

type StoreState = IStructsSlice & IGameStateSlice;

export const useStore = create<StoreState>(createRootSlice);
