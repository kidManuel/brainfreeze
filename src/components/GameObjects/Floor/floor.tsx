import { ThreeEvent } from '@react-three/fiber';
import React from 'react';
import { Vector2, Vector3 } from 'three';
import { useStore } from '../../../store';

const FLOOR_HEIGHT = 0.3;
const FLOOR_WIDTH = 80;
const FLOOR_DEPTH = 80;

interface FloorProps {
}

export const Floor = (): React.ReactElement => {
  const setMousePos = useStore((state) => state.setMousePos);

  const uvToWorldXY = (uv: Vector2): [number, number] => {
    const x = (FLOOR_WIDTH * uv.x) - (FLOOR_WIDTH / 2);
    const y = ((FLOOR_DEPTH * uv.y) - (FLOOR_DEPTH / 2)) * -1;
    return [x, y];
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (event.uv) {
      const mousePos = uvToWorldXY(event.uv);
      setMousePos(mousePos);
    }
  };

  return (
    <mesh
      onPointerMove={handlePointerMove}
      position={[0, -FLOOR_HEIGHT / 2, 0]}
    >
      <boxGeometry args={[FLOOR_WIDTH, FLOOR_HEIGHT, FLOOR_DEPTH]} />
      <meshStandardMaterial color="darkseagreen" />
    </mesh>
  );
};
