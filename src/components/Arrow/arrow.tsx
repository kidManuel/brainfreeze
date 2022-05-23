import { MeshProps, useFrame } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { Mesh } from 'three';
import { getGLTF } from '../../util/gltfLoader';

/** Base for spawning pawns */
export function Arrow(props: MeshProps): React.ReactElement {
  const meshRef = useRef<Mesh>(null);
  const { nodes } = getGLTF('/arrow.gltf');
  const t = 't';

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.set(0, 0, Math.PI / 2);
    }
  }, [meshRef.current]);

  return (
    <mesh
      ref={meshRef}
      geometry={nodes.arrow.geometry}
      onPointerDown={() => console.log('mouse down')}
      onPointerUp={() => console.log('mouse Up')}
      {...props}
    >
      <meshStandardMaterial color="lemonchiffon" />
    </mesh>
  );
}
