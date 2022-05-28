import React from 'react';
import { Vector3 } from 'three';
import { useStore } from '../../store';

interface StructureManagerProps {
}

export const StructureManager = (): React.ReactElement => {
  const structsList = useStore((state) => state.structsList);

  const getComponents = () => structsList.map((singleStruct) => {
    const ComponentType = singleStruct.type;
    const { id, position } = singleStruct;
    return (
      <ComponentType
        onStructSelected={() => {}}
        structId={id}
        key={id}
        position={position || new Vector3(0, 0, 0)}
      />
    );
  });

  return <>{getComponents()}</>;
};
