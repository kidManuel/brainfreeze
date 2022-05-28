import React from 'react';
import { BuildingsBar } from '../BuildingsBar/BuildingsBar';
import './styles.css';

export const UIManager = (): React.ReactElement => (
  <div id="uimanager">
    <BuildingsBar />
  </div>
);
