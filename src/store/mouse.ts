import { ThreeEvent } from '@react-three/fiber';
import produce from 'immer';
import { Vector3 } from 'three';
import { StoreSlice } from './helperTypes';

type PointerEventHandler = ((event: ThreeEvent<PointerEvent>) => void) | null;

export interface IMouseSlice {
  mousePos: Vector3;
  dragging: boolean;
  dragListener: PointerEventHandler;
  dragStartLocation: Vector3 | null;
  setMousePos: (newPos: [number, number]) => void;
  startDrag: (dragListener: PointerEventHandler, startLocation: Vector3) => void;
  endDrag: () => void;
}

export const createMouseSlice: StoreSlice<IMouseSlice> = (set) => ({
  mousePos: new Vector3(0, 0, 0),
  dragging: false,
  dragListener: null,
  dragStartLocation: null,
  setMousePos: (newPos) => {
    set(produce((state) => state.mousePos.set(newPos[0], 0, newPos[1])));
  },
  startDrag: (
    dragListener,
    startLocation,
  ) => {
    set(produce((state) => {
      state.dragging = true;
      state.dragListener = dragListener;
      state.dragStartLocation = startLocation;
    }));
  },
  endDrag: () => {
    set(produce((state) => {
      state.dragging = false;
      state.dragListener = null;
      state.dragStartLocation = null;
    }));
  },
});
