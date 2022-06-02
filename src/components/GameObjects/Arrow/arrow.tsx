import { MeshProps } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useStore } from '../../../store';
import { getGLTF } from '../../../util/gltfLoader';

interface ArrowProps {

}

/** Base for spawning pawns */
export const Arrow = ({ ...rest }: MeshProps & ArrowProps): React.ReactElement => {
  const meshRef = useRef<Mesh>(null);
  const { nodes } = getGLTF('/arrow.gltf');
  const { mousePos, dragging } = useStore();

  const rotation = Math.atan2(mousePos.z, mousePos.x);
  const scalation = mousePos.distanceTo(new Vector3(0, 0, 0));

  return dragging
    ? (
      <mesh
        ref={meshRef}
        geometry={nodes.arrow.geometry}
        rotation={[0, -rotation, 0]}
        scale={[scalation, 1, scalation * 0.3]}
        {...rest}
      >
        <meshStandardMaterial color="black" />
      </mesh>
    ) : <></>;
};
