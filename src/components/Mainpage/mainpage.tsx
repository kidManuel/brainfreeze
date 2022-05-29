import { PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Floor } from '../GameObjects/Floor';
import { StructureManager } from '../StructureManager';
import { UIManager } from '../UiManager';

export const Mainpage = (): React.ReactElement => (
  <>
    <UIManager />
    <Canvas flat dpr={[1, 2]} camera={{ position: [20, 30, 20] }}>
      <PresentationControls global zoom={1} polar={[0, 0]}>
        <StructureManager />
        <ambientLight intensity={0.5} />
        <Floor handleClick={() => {}} />
        <directionalLight />
      </PresentationControls>
    </Canvas>
  </>
);
