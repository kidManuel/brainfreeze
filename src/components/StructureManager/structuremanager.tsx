import React, { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import { GameState } from '../../sharedTypes';
import { useStore } from '../../store';

interface StructureManagerProps {
}

export const StructureManager = (): React.ReactElement => {
  const { mousePos } = useStore();
  const gameState = useStore((state) => state.gameState);
  const candidateStruct = useStore((state) => state.candidateStruct);
  const structsList = useStore((state) => state.structsList);

  // useEffect(() => {
  //   useStore.subscribe((state) => {
  //     mousePos.current = state.mousePos;
  //   });
  // });

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

  console.log(Boolean(gameState === GameState.PLACING_BUILDING), 'one');
  console.log(Boolean(candidateStruct), 'two');

  const getCandidateStructure = () => {
    // review
    if (gameState === GameState.PLACING_BUILDING && candidateStruct) {
      const BuildingType = candidateStruct;
      return (
        <BuildingType
          onStructSelected={() => {}}
          structId="candidate"
          position={new Vector3(mousePos[0], 0, mousePos[1])}
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
