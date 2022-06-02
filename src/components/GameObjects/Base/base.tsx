import { ThreeEvent } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Mesh } from 'three';
import { StructProps } from '../../../sharedTypes';
import { useStore } from '../../../store';
import { getGLTF } from '../../../util/gltfLoader';

/** Base for spawning pawns */
export const Base = ({
  onStructSelected,
  structId,
  isCandidate,
  ...rest
}: StructProps): React.ReactElement => {
  const { startDrag } = useStore();
  const meshRef = useRef<Mesh>(null);
  const rotationRef = useRef<number>(Math.PI * 2 * Math.random());
  const { nodes, materials } = getGLTF('/house.gltf');
  const { position } = rest;

  const finishDrag = (event: ThreeEvent<PointerEvent>) => {

  };

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    startDrag(finishDrag, position);
  };

  return (
    <mesh
      ref={meshRef}
      geometry={nodes.house.geometry}
      rotation={[0, rotationRef.current, 0]}
      scale={[1.5, 1.5, 1.5]}
      onPointerDown={handlePointerDown}
      {...rest}
    >
      {isCandidate
        ? <meshPhongMaterial color="#725AC1" opacity={0.6} transparent />
        : <meshStandardMaterial {...materials.housemat} />}
    </mesh>
  );
};
