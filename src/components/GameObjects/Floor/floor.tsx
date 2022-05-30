import { ThreeEvent } from '@react-three/fiber';
import React from 'react';
import { Vector2, Vector3 } from 'three';
import { GameState } from '../../../sharedTypes';
import { useStore } from '../../../store';

const FLOOR_HEIGHT = 0.3;
const FLOOR_WIDTH = 80;
const FLOOR_DEPTH = 80;

export const Floor = (): React.ReactElement => {
  const {
    setMousePos, gameState, promoteCurrentCandidate, setCurrentAction,
  } = useStore();

  const uvToWorldXY = (uv: Vector2): [number, number] => {
    // Alternative to https://stackoverflow.com/questions/13055214/mouse-canvas-x-y-to-three-js-world-x-y-z

    const x = (FLOOR_WIDTH * uv.x) - (FLOOR_WIDTH / 2);
    const y = ((FLOOR_DEPTH * uv.y) - (FLOOR_DEPTH / 2)) * -1;
    return [x, y];
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (event.uv) {
      if (gameState === GameState.PLACING_BUILDING || gameState === GameState.DRAGGING) {
        const mousePos = uvToWorldXY(event.uv);
        setMousePos(mousePos);
      }
    }
  };

  const finishPlacing = (position: Vector2) => {
    const mousePos = uvToWorldXY(position);
    setCurrentAction(GameState.DEFAULT);
    promoteCurrentCandidate(new Vector3(mousePos[0], 0, mousePos[1]));
  };

  const handlePointerClick = (event: ThreeEvent<PointerEvent>) => {
    if (event.uv) {
      if (gameState === GameState.PLACING_BUILDING) {
        finishPlacing(event.uv);
      }
    }
  };

  return (
    <mesh
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerClick}
      position={[0, -FLOOR_HEIGHT / 2, 0]}
    >
      <boxGeometry args={[FLOOR_WIDTH, FLOOR_HEIGHT, FLOOR_DEPTH]} />
      <meshStandardMaterial color="darkseagreen" />
    </mesh>
  );
};
