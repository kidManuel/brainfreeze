import React from 'react';
import { Vector3 } from 'three';
import {
  CameraControls, CanvasControls, EnviromentManager, StructureManager, UIManager,
} from '..';
import { Base, Arrow, Floor } from '../GameObjects';

export const Mainpage = (): React.ReactElement => (

  <>
    <UIManager />
    <CanvasControls>
      <CameraControls>
        <EnviromentManager />
        <StructureManager />
        <ambientLight intensity={0.6} />
        <Base structId="initialBase" scale={[3, 3, 3]} position={new Vector3(0, 0, 0)} />
        <Arrow />
        <Floor />
        <directionalLight intensity={1.2} />
      </CameraControls>
    </CanvasControls>
  </>
);
