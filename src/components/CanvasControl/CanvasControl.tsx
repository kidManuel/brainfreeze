import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useStore } from '../../store';

type CameraProps = {
  children: React.ReactNode
};

export const CanvasControls = ({ children }:CameraProps) => {
  const { endDrag } = useStore();
  return (
    <Canvas
      flat
      dpr={[1, 2]}
      camera={{ position: [0, 15, 15] }}
      onMouseUp={endDrag}
    >
      {children}
    </Canvas>
  );
};
