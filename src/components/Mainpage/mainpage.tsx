import { PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Base } from '../GameObjects';
import { Floor } from '../GameObjects/Floor';
import { StructureManager } from '../StructureManager';
import { UIManager } from '../UiManager';

export const Mainpage = (): React.ReactElement => (

  <>
    <UIManager />
    <Canvas flat dpr={[1, 2]} camera={{ position: [0, 30, 25] }}>
      <PresentationControls
        global
        rotation={[0, -Math.PI / 4, 0]}
        polar={[0, 0]}
      >
        <StructureManager />
        <ambientLight intensity={0.5} />
        <Base structId="initialBase" scale={[3, 3, 3]} />
        <Floor />
        <directionalLight />
      </PresentationControls>
    </Canvas>
  </>
);
