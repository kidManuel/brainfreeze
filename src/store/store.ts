import create, { SetState, GetState } from 'zustand';
import { createStructuresSlice } from './structures';
import { createUserActionSlice } from './userAction';

export const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createUserActionSlice(set, get),
  ...createStructuresSlice(set, get),
});

export const useStore = create(createRootSlice);
