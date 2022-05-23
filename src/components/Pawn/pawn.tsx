import { MeshProps, useFrame } from '@react-three/fiber';
import {
  BufferGeometry, Material, Mesh, Vector3,
} from 'three';
import React, { useEffect, useRef } from 'react';

type PawnProps = {
  inputDirection: Vector3;
  maxDistance: number;
};

/** Base for spawning workers */
export function Pawn({
  inputDirection,
  maxDistance,
  ...rest
}: MeshProps & PawnProps): React.ReactElement {
  const meshRef = useRef<Mesh>(null);
  const distanceTravelled = useRef<number>(0);
  const currentDirection = useRef<Vector3>(new Vector3(0, 0, 0));

  useFrame((_) => {
    meshRef.current && meshRef.current.position.add(currentDirection.current);
    distanceTravelled.current += currentDirection.current.length();
    if (distanceTravelled.current > maxDistance) {
      // Re villero esto
      distanceTravelled.current = 0;
      currentDirection.current.negate();
    }
  });

  useEffect(() => {
    currentDirection.current = inputDirection;
  }, [inputDirection]);

  return (
    <mesh
      ref={meshRef}
      // onPointerDown={() => console.log("mouse down")}
      // onPointerUp={() => console.log("mouse Up")}
      {...rest}
    >
      <sphereGeometry args={[0.7, 5, 4]} />
      <meshStandardMaterial color="#F0A868" />
    </mesh>
  );
}
