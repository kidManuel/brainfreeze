import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useStore } from '../../store';

type CameraProps = {
  children: React.ReactNode
};

export const CanvasControls = ({ children }:CameraProps) => {
  const { endDrag, dragListener, dragging } = useStore();

  const handleMouseUp = () => {
    if (dragging && dragListener) {
      dragListener();
      endDrag();
    }
  };

  return (
    <Canvas
      flat
      dpr={[1, 2]}
      camera={{ position: [0, 15, 15] }}
      onPointerUp={handleMouseUp}
    >
      {children}
    </Canvas>
  );
};
