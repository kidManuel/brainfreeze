import { ThreeEvent } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Vector3 } from 'three';
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
  const structPos = useRef<Vector3>(new Vector3(0, 0, 0));

  const finishDrag = (event: ThreeEvent<PointerEvent>) => {

  };

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    if (!isCandidate) {
      startDrag(finishDrag, structPos.current);
    }
  };

  const handleStructPlaced = (placementPosition: Vector3) => {
    structPos.current = placementPosition;
  };

  return (
    <StructRenderer
      isCandidate={isCandidate}
      filename="house"
      onPointerDown={handlePointerDown}
      onFinishPlacing={handleStructPlaced}
      {...rest}
    />
  );
};
