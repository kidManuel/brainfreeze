import { MeshProps } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { Mesh, Vector3 } from 'three';
import { radToDeg } from 'three/src/math/MathUtils';
import { useStore } from '../../../store';
import { getGLTF } from '../../../util/gltfLoader';

interface ArrowProps {
  isDragging: boolean,
}

/** Base for spawning pawns */
export const Arrow = ({ isDragging, ...rest }: MeshProps & ArrowProps): React.ReactElement => {
  const meshRef = useRef<Mesh>(null);
  const { nodes } = getGLTF('/arrow.gltf');
  const { mousePos } = useStore();

  const rotation = Math.atan2(mousePos.z, mousePos.x);
  const scalation = mousePos.distanceTo(new Vector3(0, 0, 0));

  return (
    <mesh
      ref={meshRef}
      geometry={nodes.arrow.geometry}
      rotation={[0, -rotation, 0]}
      scale={[scalation, 1, scalation * 0.3]}
      {...rest}
    >
      <meshStandardMaterial color="black" />
    </mesh>
  );
};
