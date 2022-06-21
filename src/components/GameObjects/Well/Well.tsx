import React, { useRef } from 'react';
import { Vector3 } from 'three';
import { StructProps } from '../../../sharedTypes';
import { StructRenderer } from '../StructRenderer';

/** Base for spawning pawns */
export const Well = ({
  onStructSelected,
  structId,
  isCandidate,
  ...rest
}: StructProps): React.ReactElement => {
  const structPos = useRef<Vector3>(new Vector3(0, 0, 0));

  const handleStructPlaced = (placementPosition: Vector3) => {
    structPos.current = placementPosition;
  };

  return (
    <StructRenderer
      isCandidate={isCandidate}
      filename="well"
      onFinishPlacing={handleStructPlaced}
      {...rest}
    />
  );
};
