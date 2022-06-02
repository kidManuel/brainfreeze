import React from 'react';
import { useStore } from '../../store';
import { Base } from '../GameObjects';
import { BottomBar, BottomBarButton } from '../UI Components';

export const BuildingsBar = () => {
  const { setCandidate } = useStore();

  const handleBaseBuilding = () => {
    setCandidate(Base);
  };

  return (
    <BottomBar>
      <BottomBarButton onClickHandler={handleBaseBuilding}>Base</BottomBarButton>
    </BottomBar>
  );
};
