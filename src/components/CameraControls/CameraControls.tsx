import { PresentationControls } from '@react-three/drei';
import React from 'react';
import { useStore } from '../../store';

type CameraProps = {
  children: React.ReactNode
};

export const CameraControls = ({ children }:CameraProps) => {
  const { dragging } = useStore();
  return (
    <PresentationControls
      global
      polar={[0, 0]}
      speed={dragging ? 0 : 1.2}
    >
      {children}
    </PresentationControls>
  );
};
