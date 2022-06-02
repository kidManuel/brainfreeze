import { ThreeEvent } from '@react-three/fiber';
import React from 'react';
import { Vector2, Vector3 } from 'three';
import { FLOOR_DEPTH, FLOOR_HEIGHT, FLOOR_WIDTH } from '../../../config';
import { useStore } from '../../../store';

export const Floor = (): React.ReactElement => {
  const {
    setMousePos, promoteCurrentCandidate, dragging, candidateStruct,
  } = useStore();

  const uvToWorldXY = (uv: Vector2): [number, number] => {
    // Alternative to https://stackoverflow.com/questions/13055214/mouse-canvas-x-y-to-three-js-world-x-y-z

    const x = (FLOOR_WIDTH * uv.x) - (FLOOR_WIDTH / 2);
    const y = ((FLOOR_DEPTH * uv.y) - (FLOOR_DEPTH / 2)) * -1;
    return [x, y];
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (event.uv) {
      if (candidateStruct || dragging) {
        const mousePos = uvToWorldXY(event.uv);
        setMousePos(mousePos);
      }
    }
  };

  const finishPlacing = (position: Vector2) => {
    const mousePos = uvToWorldXY(position);
    promoteCurrentCandidate(new Vector3(mousePos[0], 0, mousePos[1]));
  };

  const handlePointerClick = (event: ThreeEvent<PointerEvent>) => {
    if (event.uv) {
      if (candidateStruct) {
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
