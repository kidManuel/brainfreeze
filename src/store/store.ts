import create, { SetState, GetState } from 'zustand';
import { createUserActionSlice } from './userAction';

export const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createUserActionSlice(set, get),
});

export const useStore = create(createRootSlice);
