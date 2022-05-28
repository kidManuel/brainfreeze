import { ThreeEvent } from '@react-three/fiber';
import React from 'react';
import { Vector3 } from 'three';

const FLOOR_HEIGHT = 0.3;
const FLOOR_WIDTH = 50;
const FLOOR_DEPTH = 50;

interface FloorProps {
  handleClick: (position: Vector3) => void;
}

export const Floor = ({ handleClick }: FloorProps): React.ReactElement => {
  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    if (event.uv) {
      const newPosition = new Vector3(
        (FLOOR_WIDTH * event.uv.x) - (FLOOR_WIDTH / 2),
        0,
        ((FLOOR_DEPTH * event.uv.y) - (FLOOR_DEPTH / 2)) * -1,
      );
      console.log(newPosition);
      handleClick(newPosition);
    }
  };

  return (
    <mesh
      onPointerDown={handlePointerDown}
      //   onPointerUp={() => console.log("mouse Up")}
      position={[0, -FLOOR_HEIGHT / 2, 0]}
    >
      <boxGeometry args={[FLOOR_WIDTH, FLOOR_HEIGHT, FLOOR_DEPTH]} />
      <meshStandardMaterial color="darkseagreen" />
    </mesh>
  );
};
