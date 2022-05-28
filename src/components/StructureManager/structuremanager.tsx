import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';
import { Vector2 } from 'three';
import { v4 } from 'uuid';

type StructProps = {
  onStructSelected: () => void;
};

export type StructState = {
  id: string;
  component: React.ReactElement;
};

interface StructureManagerProps {
  structsList: StructState[];
}

export const StructureManager = ({ structsList }: StructureManagerProps): React.ReactElement => {
  // maybe unnecessary
  const getStructures = () => structsList.map((state) => state.component);

  return <>{getStructures()}</>;
};
