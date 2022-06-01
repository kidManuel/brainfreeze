import { MeshProps } from '@react-three/fiber';
import React from 'react';
import { getGLTF } from '../../../util/gltfLoader';

export const Rocks = (props: MeshProps): React.ReactElement => {
  const { nodes, materials } = getGLTF('/rocks.gltf');

  return (
    <mesh
      geometry={nodes.rocks.geometry}
      {...props}
    >
      <meshStandardMaterial
        {...materials.rocksmat}
      />
    </mesh>
  );
};
