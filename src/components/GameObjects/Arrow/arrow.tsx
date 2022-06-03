import { MeshProps, useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useStore } from '../../../store';
import { getGLTF } from '../../../util/gltfLoader';

interface ArrowProps {

}

export const Arrow = ({ ...rest }: MeshProps & ArrowProps): React.ReactElement => {
  const meshRef = useRef<Mesh>(null);
  const mousePosRef = useRef<Vector3>(new Vector3());
  const { nodes } = getGLTF('/arrow.gltf');
  const { dragging } = useStore();

  useEffect(() => {
    useStore.subscribe((state) => (mousePosRef.current = state.mousePos));
  });

  useFrame(() => {
    if (meshRef.current) {
      const mousePosVector = mousePosRef.current;
      const rotation = Math.atan2(mousePosVector.z, mousePosVector.x);
      const scalation = mousePosVector.distanceTo(new Vector3(0, 0, 0));
      meshRef.current.rotation.set(0, -rotation, 0);
      meshRef.current.scale.set(scalation, 1, scalation * 0.3);
    }
  });

  return dragging
    ? (
      <mesh
        ref={meshRef}
        geometry={nodes.arrow.geometry}
        {...rest}
      >
        <meshStandardMaterial color="black" />
      </mesh>
    ) : <></>;
};
