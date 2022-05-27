import { MeshProps } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Mesh } from 'three';
import { useActionStateSelector, UserActionState } from '../../store/userAction';
import { getGLTF } from '../../util/gltfLoader';

/** Base for spawning pawns */
export const Arrow = (props: MeshProps): React.ReactElement => {
  const meshRef = useRef<Mesh>(null);
  const { nodes } = getGLTF('/arrow.gltf');
  const userState = useSelector(useActionStateSelector);

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
      <meshStandardMaterial color={userState === UserActionState.DEFAULT ? 'yellow' : 'red'} />
    </mesh>
  );
};
