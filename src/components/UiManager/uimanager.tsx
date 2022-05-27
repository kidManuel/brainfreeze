import React from 'react';
import { useStore } from '../../store';
import { BottomBar, BottomBarButton } from '../UI Components';
import './styles.css';

export const UIManager = (): React.ReactElement => {
  const startPlacing = useStore((state) => state.startPlacing);

  return (
    <div id="uimanager">
      <BottomBar>
        <BottomBarButton onClickHandler={startPlacing}>Base</BottomBarButton>
      </BottomBar>
    </div>
  );
};
