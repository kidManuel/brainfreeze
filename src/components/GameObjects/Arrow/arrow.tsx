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
  const originRef = useRef<Vector3>(new Vector3());
  const { nodes } = getGLTF('/arrow.gltf');
  const { dragging, dragStartLocation } = useStore();

  useEffect(() => {
    useStore.subscribe((state) => (mousePosRef.current = state.mousePos));
  });

  useFrame(() => {
    if (meshRef.current && dragging && dragStartLocation) {
      const mousePosVector = mousePosRef.current;
      const rotation = Math.atan2(
        (mousePosVector.z - dragStartLocation.z),
        (mousePosVector.x - dragStartLocation.x),
      );
      const scalation = Math.min(mousePosVector.distanceTo(dragStartLocation), 10);

      // Offset origin
      // TODO: Clamp offset
      originRef.current.copy(dragStartLocation)
        .sub(mousePosRef.current)
        .setLength(-1)
        .add(dragStartLocation);

      meshRef.current.position.copy(originRef.current);
      meshRef.current.rotation.set(0, -rotation, 0);
      meshRef.current.scale.set(scalation, scalation, scalation * 0.2);
    }
  });

  return dragging
    ? (
      <mesh
        ref={meshRef}
        geometry={nodes.arrow.geometry}
        {...rest}
      >
        <meshStandardMaterial color="cornflowerblue" transparent opacity={0.7} />
      </mesh>
    ) : <></>;
};
