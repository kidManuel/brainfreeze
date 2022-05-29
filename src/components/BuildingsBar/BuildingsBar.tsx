import React from 'react';
import { useStore } from '../../store';
import { Base } from '../GameObjects';
import { BottomBar, BottomBarButton } from '../UI Components';

export const BuildingsBar = () => {
  const startPlacing = useStore((state) => state.startPlacing);
  const setCandidate = useStore((state) => state.setCandidate);

  const handleBaseBuilding = () => {
    startPlacing();
    setCandidate(Base);
  };

  return (
    <BottomBar>
      <BottomBarButton onClickHandler={handleBaseBuilding}>Base</BottomBarButton>
    </BottomBar>
  );
};
