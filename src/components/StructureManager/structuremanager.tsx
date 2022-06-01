import React from 'react';
import { Vector3 } from 'three';
import { GameState } from '../../sharedTypes';
import { useStore } from '../../store';

export const StructureManager = (): React.ReactElement => {
  // TODO: Review transcienscy

  const {
    gameState, candidateStruct, structsList, mousePos,
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
    if (gameState === GameState.PLACING_BUILDING && candidateStruct) {
      const BuildingType = candidateStruct;
      return (
        <BuildingType
          structId="candidate"
          position={new Vector3(mousePos[0], 0, mousePos[1])}
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
