import React from 'react';
import { useStore } from '../../store';
import { BottomBar, BottomBarButton } from '../UI Components';

export const BuildingsBar = () => {
  const startPlacing = useStore((state) => state.startPlacing);

  return (
    <BottomBar>
      <BottomBarButton onClickHandler={startPlacing}>Base</BottomBarButton>
    </BottomBar>
  );
};
