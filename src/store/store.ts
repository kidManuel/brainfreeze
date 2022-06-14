import create, { SetState, GetState } from 'zustand';
import { createStructuresSlice, IStructsSlice } from './structures';
import { createMouseSlice, IMouseSlice } from './mouse';
import { createPopulationSlice, IPopSlice } from './population';

export const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createStructuresSlice(set, get),
  ...createMouseSlice(set, get),
  ...createPopulationSlice(set, get),
});

type StoreState = IStructsSlice & IMouseSlice & IPopSlice;

export const useStore = create<StoreState>(createRootSlice);
