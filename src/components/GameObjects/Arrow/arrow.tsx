import { MeshProps } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { Mesh } from 'three';
import { getGLTF } from '../../../util/gltfLoader';

interface ArrowProps {
  isDragging: boolean,
}

/** Base for spawning pawns */
export const Arrow = ({ isDragging, ...rest }: MeshProps & ArrowProps): React.ReactElement => {
  const meshRef = useRef<Mesh>(null);
  const { nodes } = getGLTF('/arrow.gltf');

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.set(0, 0, Math.PI / 2);
    }
  }, [meshRef.current]);

  return (
    <mesh
      ref={meshRef}
      geometry={nodes.arrow.geometry}
      {...rest}
    >
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
};
