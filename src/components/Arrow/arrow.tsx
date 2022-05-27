import { MeshProps } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { Mesh } from 'three';
import { useStore } from '../../store';
import { UserActionState } from '../../store/userAction';
import { getGLTF } from '../../util/gltfLoader';

interface ArrowProps {
  isDragging: boolean,
}

/** Base for spawning pawns */
export const Arrow = ({ isDragging, ...rest }: MeshProps & ArrowProps): React.ReactElement => {
  const meshRef = useRef<Mesh>(null);
  const { nodes } = getGLTF('/arrow.gltf');
  const currentUserState = useStore((state) => state.current);

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
      {...rest}
    >
      <meshStandardMaterial color={currentUserState === UserActionState.DEFAULT ? 'yellow' : 'red'} />
    </mesh>
  );
};
