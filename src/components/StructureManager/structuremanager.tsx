import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';
import { Vector2 } from 'three';
import { v4 } from 'uuid';
import { Pawn } from '../Pawn';

type StructProps = {
  onStructSelected: () => void;
};

type StructState = {
  id: string;
  component: React.ReactElement;
  position: Vector2;
};

export function StructureManager(): React.ReactElement {
  // maybe unnecessary
  const [structsState, setStructsState] = useState<StructState[]>([]);
  useFrame((state) => {});

  const getStructures = () => structsState.map((state) => state.component);

  const addStruct = (
    BuildingType: typeof React.Component,
    position?: Vector2,
    props?: StructProps,
  ) => {
    const newId = v4();
    const newState = [...structsState];
    newState.push({
      id: newId,
      component: <BuildingType {...props} key={newId} />,
      position: position || new Vector2(0, 0),
    });
    setStructsState(newState);
  };

  return <>{getStructures()}</>;
}
