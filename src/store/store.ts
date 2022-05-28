import create, { SetState, GetState } from 'zustand';
import { createStructuresSlice, IStructsSlice } from './structures';
import { createUserActionSlice, IUserActionSlice } from './userAction';

export const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createUserActionSlice(set, get),
  ...createStructuresSlice(set, get),
});

type StoreState = IStructsSlice & IUserActionSlice;

export const useStore = create<StoreState>(createRootSlice);
