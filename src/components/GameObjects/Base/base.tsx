import React, { useRef } from 'react';
import { Vector3 } from 'three';
import { v4 } from 'uuid';
import { StructProps } from '../../../sharedTypes';
import { useStore } from '../../../store';
import { SinglePawnInfo } from '../../../store/population';
import { StructRenderer } from '../StructRenderer';

/** Base for spawning pawns */
export const Base = ({
  onStructSelected,
  structId,
  isCandidate,
  ...rest
}: StructProps): React.ReactElement => {
  const {
    startDrag, addRoute,
  } = useStore();
  const structPos = useRef<Vector3>(new Vector3(0, 0, 0));

  const finishDrag = () => {
    const { mousePos } = useStore.getState();
    const newRouteId = v4();

    const pathAngle = structPos.current
      .clone()
      .sub(mousePos)
      .normalize();

    addRoute({
      id: newRouteId,
      angle: pathAngle,
      origin: structPos.current.clone().setY(0.5),
      population: [],
    });
  };

  const handlePointerDown = () => {
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
