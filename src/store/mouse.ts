import produce from 'immer';
import { Vector3 } from 'three';
import { StoreSlice } from './helperTypes';

export interface IMouseSlice {
  mousePos: Vector3;
  setMousePos: (newPos: [number, number]) => void;
}

export const createMouseSlice: StoreSlice<IMouseSlice> = (set) => ({
  mousePos: new Vector3(0, 0, 0),
  setMousePos: (newPos) => {
    set(produce((state) => state.mousePos.set(newPos[0], 0, newPos[1])));
  },
});
