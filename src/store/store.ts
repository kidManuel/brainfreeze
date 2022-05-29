import create, { SetState, GetState } from 'zustand';
import { createStructuresSlice, IStructsSlice } from './structures';
import { createGameStateSlice, IGameStateSlice } from './gameState';
import { createMouseSlice, IMouseSlice } from './mouse';

export const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createGameStateSlice(set, get),
  ...createStructuresSlice(set, get),
  ...createMouseSlice(set, get),
});

type StoreState = IStructsSlice & IGameStateSlice & IMouseSlice;

export const useStore = create<StoreState>(createRootSlice);
