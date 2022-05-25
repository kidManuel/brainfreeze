import { MeshProps, useFrame } from '@react-three/fiber';
import React from 'react';
import { Vector3 } from 'three';
import { Pawn } from '../Pawn';

/** Base for spawning pawns */
export const Base = (props: MeshProps): React.ReactElement => {
  useFrame((state) => {});

  return (
    <mesh
      //   onPointerDown={() => console.log("mouse down")}
      //   onPointerUp={() => console.log("mouse Up")}
      {...props}
    >
      <boxGeometry args={[1, 1.5, 1]} />
      <meshStandardMaterial color="lemonchiffon" />
      <Pawn
        position={[0, 0.5, 0]}
        inputDirection={new Vector3(0.05, 0, 0)}
        maxDistance={15}
      />
    </mesh>
  );
};
