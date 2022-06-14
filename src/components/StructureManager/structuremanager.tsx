import React from 'react';
import { Vector3 } from 'three';
import { useStore } from '../../store';

export const StructureManager = (): React.ReactElement => {
  const {
    candidateStruct, structsList, mousePos,
  } = useStore();

  const getComponents = () => structsList.map((singleStruct) => {
    const ComponentType = singleStruct.type;
    const { id, position } = singleStruct;

    return (
      <ComponentType
        structId={id}
        key={id}
        position={position || new Vector3(0, 0, 0)}
        isCandidate={false}
      />
    );
  });

  const getCandidateStructure = () => {
    if (candidateStruct) {
      // Need an uppercased variable name to pass as React.ElementType to JSX
      const BuildingType = candidateStruct;
      return (
        <BuildingType
          structId="candidate"
          position={mousePos}
          isCandidate
        />
      );
    }
    return null;
  };

  return (
    <>
      {getCandidateStructure()}
      {getComponents()}
    </>
  );
};
