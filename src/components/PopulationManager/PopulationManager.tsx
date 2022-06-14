import React, { useEffect } from 'react';
import { v4 } from 'uuid';
import { useStore } from '../../store';
import { SinglePawnInfo } from '../../store/population';
import { Pawn } from '../GameObjects';

export const PopulationManager = (): React.ReactElement => {
  const {
    populationList, addPawn,
  } = useStore();

  const pawnsPerRoute = 5;

  const getComponents = () => {
    const populationComponents = Object.keys(populationList)
      .reduce<React.ReactNode[]>((accumulator, current) => {
      const pawnsInRoute = populationList[current].population;
      const pawnsInParent = pawnsInRoute.map(
        (singlePawnData) => (
          <Pawn
            position={singlePawnData.origin}
            key={singlePawnData.pawnId}
            inputDirection={singlePawnData.inputDirection}
            maxDistance={30}
            pawnId={singlePawnData.pawnId}
          />
        ),
      );

      return [...accumulator, ...pawnsInParent];
    }, []);

    return populationComponents;
  };

  function releaseNewPawns() {
    const popList = useStore.getState().populationList;

    Object.keys(popList).forEach((singlePath) => {
      const {
        population, id, angle, origin,
      } = popList[singlePath];

      if (population.length < pawnsPerRoute) {
        const newPawnInfo: SinglePawnInfo = {
          pawnId: v4(),
          inputDirection: angle,
          directionUpdated: false,
          origin,
        };

        // TODO: Batch update
        addPawn(id, newPawnInfo);
      }
    });
  }

  useEffect(() => {
    setInterval(() => {
      releaseNewPawns();
    }, 1000);
  }, []);

  return (
    <>
      {getComponents()}
    </>
  );
};
