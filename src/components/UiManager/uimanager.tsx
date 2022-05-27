import React from 'react';
import { startPlacing } from '../../store/userAction';
import { BottomBar, BottomBarButton } from '../UI Components';
import './styles.css';

export const UIManager = (): React.ReactElement => (
  <div id="uimanager">
    <BottomBar>
      <BottomBarButton onClickHandler={() => { startPlacing(); }}>Base</BottomBarButton>
    </BottomBar>
  </div>
);
