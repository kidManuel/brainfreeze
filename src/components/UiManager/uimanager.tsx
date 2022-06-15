import React from 'react';
import { BuildingsBar } from '../BuildingsBar/BuildingsBar';
import { UiManager } from './styles';

export const UIManager = (): React.ReactElement => (
  <UiManager>
    <BuildingsBar />
  </UiManager>
);
