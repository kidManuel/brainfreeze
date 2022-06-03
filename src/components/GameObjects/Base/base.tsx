import { ThreeEvent } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Mesh } from 'three';
import { StructProps } from '../../../sharedTypes';
import { useStore } from '../../../store';
import { StructRenderer } from '../StructRenderer';

/** Base for spawning pawns */
export const Base = ({
  onStructSelected,
  structId,
  isCandidate,
  ...rest
}: StructProps): React.ReactElement => {
  const { startDrag } = useStore();
  const meshRef = useRef<Mesh>(null);

  const finishDrag = (event: ThreeEvent<PointerEvent>) => {

  };

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    if (meshRef.current) {
      startDrag(finishDrag, meshRef.current.position);
    }
  };

  return (
    <StructRenderer
      isCandidate={isCandidate}
      filename="house"
      onPointerDown={handlePointerDown}
      {...rest}
    />
  );
};
