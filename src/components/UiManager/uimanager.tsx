import React from 'react';
import { BottomBar, BottomBarButton } from '../UI Components';
import './styles.css';

export const UIManager = (): React.ReactElement => (
  <div id="uimanager">
    <BottomBar>
      <BottomBarButton onClickHandler={() => {}}>Base</BottomBarButton>
    </BottomBar>
  </div>
);
