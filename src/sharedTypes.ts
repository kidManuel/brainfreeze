import { MeshProps, ThreeEvent } from '@react-three/fiber';
import { Vector3 } from 'three';

export type StructProps = MeshProps & {
  structId: string;
  onStructSelected?: () => void;
  isCandidate?: boolean;
  position: Vector3;
};

export enum GameState {
  DEFAULT,
  DRAGGING,
  PLACING_BUILDING,
  PAUSED,
}

export type PointerEventHandler = ((event: ThreeEvent<PointerEvent>) => void) | null;
