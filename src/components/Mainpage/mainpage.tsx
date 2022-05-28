import { PresentationControls } from '@react-three/drei';
import { Canvas, MeshProps } from '@react-three/fiber';
import { Vector3 } from 'three';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Floor } from '../GameObjects/Floor';
import { StructState, StructureManager } from '../StructureManager';
import { UIManager } from '../UiManager';

export const Mainpage = (): React.ReactElement => {
  const [structsState, setStructsState] = useState<StructState[]>([]);

  const addStruct = (
    BuildingType: React.ComponentType<MeshProps>,
    position?: Vector3,
    // props?: StructProps,
  ) => {
    const newId = v4();
    const newState = [...structsState];
    newState.push({
      id: newId,
      component: <BuildingType key={newId} position={position || new Vector3(0, 0, 0)} />,
    });
    setStructsState(newState);
  };

  return (
    <>
      <UIManager />
      <Canvas flat dpr={[1, 2]} camera={{ position: [5, 40, 0] }}>
        <PresentationControls global zoom={1} polar={[0, 0]}>
          <ambientLight intensity={0.5} />
          <Floor handleClick={() => {}} />
          <StructureManager structsList={structsState} />
          <directionalLight />
        </PresentationControls>
      </Canvas>
    </>
  );
};
