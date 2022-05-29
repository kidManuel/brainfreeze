import { StoreSlice } from './helperTypes';

export interface IMouseSlice {
  mousePos: [number, number];
  setMousePos: (newPos: [number, number]) => void;
}

export const createMouseSlice: StoreSlice<IMouseSlice> = (set) => ({
  mousePos: [0, 0],
  setMousePos: (newPos) => {
    set((state) => ({ ...state, mousePos: newPos }));
  },
});
