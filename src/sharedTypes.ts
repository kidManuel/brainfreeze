import { MeshProps } from '@react-three/fiber';

export type StructProps = MeshProps & {
  onStructSelected: () => void;
  structId: string;
};

export enum GameState {
  DEFAULT,
  DRAGGING,
  PLACING_BUILDING,
  PAUSED,
}
