import React from 'react';
import { Vector3 } from 'three';
import { useStore } from '../../store';

export const StructureManager = (): React.ReactElement => {
  // TODO: Review transcienscy

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
    // review
    if (candidateStruct) {
      const BuildingType = candidateStruct;
      return (
        <BuildingType
          structId="candidate"
          position={new Vector3(mousePos.x, 0, mousePos.z)}
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
