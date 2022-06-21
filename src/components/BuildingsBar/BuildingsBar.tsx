import React from 'react';
import { useStore } from '../../store';
import { Base, Well, Towncenter } from '../GameObjects';
import { BottomBar, BottomBarButton } from '../UI Components';
import { wellimage, baseimage, towncenterimage } from '../../assets';

export const BuildingsBar = () => {
  const { setCandidate, candidateStruct } = useStore();

  const handleBaseBuilding = () => {
    setCandidate(Base);
  };

  const handleWellBuilding = () => {
    setCandidate(Well);
  };

  const handleTowncenterBuilding = () => {
    setCandidate(Towncenter);
  };

  const hideBuildings = Boolean(candidateStruct);

  return (
    <BottomBar hide={hideBuildings}>
      <BottomBarButton background={baseimage} onClickHandler={handleBaseBuilding} />
      <BottomBarButton background={wellimage} onClickHandler={handleWellBuilding} />
      <BottomBarButton background={towncenterimage} onClickHandler={handleTowncenterBuilding} />
    </BottomBar>
  );
};
