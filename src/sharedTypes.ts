import { MeshProps } from '@react-three/fiber';

export type StructProps = MeshProps & {
  structId: string;
  onStructSelected?: () => void;
  isCandidate?: boolean;
};

export enum GameState {
  DEFAULT,
  DRAGGING,
  PLACING_BUILDING,
  PAUSED,
}
