import { MeshProps, useFrame } from '@react-three/fiber';
import {
  Mesh, Vector3,
} from 'three';
import React, { useEffect, useRef } from 'react';

type PawnProps = {
  inputDirection: Vector3;
  maxDistance: number;
  pawnId: string;
  color?: string;
};

/** Base for spawning workers */
export const Pawn = ({
  inputDirection,
  maxDistance,
  color,
  pawnId,
  ...rest
}: MeshProps & PawnProps): React.ReactElement => {
  const meshRef = useRef<Mesh>(null);
  const distanceTravelled = useRef<number>(0);
  const currentDirection = useRef<Vector3>(new Vector3(0, 0, 0));

  useFrame(() => {
    meshRef.current?.position.sub(currentDirection.current);
    distanceTravelled.current += currentDirection.current.length();
    if (distanceTravelled.current > maxDistance) {
      // TODO: Reconsider
      distanceTravelled.current = 0;
      currentDirection.current.negate();
    }
  });

  useEffect(() => {
    currentDirection.current = inputDirection.clone().setLength(0.25);
  }, [inputDirection]);

  return (
    <mesh
      ref={meshRef}
      {...rest}
    >
      <sphereGeometry args={[0.7, 5, 4]} />
      <meshStandardMaterial color={color || '#F0A868'} />
    </mesh>
  );
};
