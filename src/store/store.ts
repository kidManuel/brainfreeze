import create, { SetState, GetState } from 'zustand';
import { createStructuresSlice, IStructsSlice } from './structures';
import { createMouseSlice, IMouseSlice } from './mouse';

export const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createStructuresSlice(set, get),
  ...createMouseSlice(set, get),
});

type StoreState = IStructsSlice & IMouseSlice;

export const useStore = create<StoreState>(createRootSlice);
