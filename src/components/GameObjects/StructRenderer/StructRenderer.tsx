import { MeshProps, useFrame } from '@react-three/fiber';
import React, { forwardRef, useEffect, useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { getGLTF } from '../../../util/gltfLoader';
import { useStore } from '../../../store';

interface StructRendererProps {
  filename: string,
  frameFunction?: () => void;
  isCandidate?: boolean
}

type StructRendererFinalProps = StructRendererProps & MeshProps;

export const StructRenderer = (
  {
    filename, isCandidate, frameFunction, ...rest
  }: StructRendererFinalProps,
) => {
  const meshRef = useRef<Mesh>(null);
  const mousePosRef = useRef<Vector3>(new Vector3());
  const rotationRef = useRef<number>(Math.PI * 2 * Math.random());

  const { nodes, materials } = getGLTF(`/${filename}.gltf`);

  useEffect(() => {
    useStore.subscribe((state) => (mousePosRef.current = state.mousePos));
  });

  useFrame(() => {
    if (meshRef.current) {
      if (frameFunction) {
        frameFunction();
      }
      if (isCandidate) {
        meshRef.current.position.set(mousePosRef.current.x, mousePosRef.current.y, mousePosRef.current.z);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={nodes[filename].geometry}
      rotation={[0, rotationRef.current, 0]}
      {...rest}
    >
      {isCandidate
        ? <meshPhongMaterial color="#725AC1" opacity={0.6} transparent />
        : <meshStandardMaterial {...materials[`${filename}mat`]} />}
    </mesh>
  );
};
