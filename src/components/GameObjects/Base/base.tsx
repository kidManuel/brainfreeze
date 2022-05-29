import { MeshProps } from '@react-three/fiber';
import React from 'react';

/** Base for spawning pawns */
export const Base = (props: MeshProps): React.ReactElement => (
  <mesh
    {...props}
  >
    <boxGeometry args={[1, 1.5, 1]} />
    <meshStandardMaterial color="lemonchiffon" />
  </mesh>
);
