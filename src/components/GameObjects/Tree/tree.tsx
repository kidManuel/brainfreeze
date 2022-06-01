import { MeshProps } from '@react-three/fiber';
import React from 'react';
import { getGLTF } from '../../../util/gltfLoader';

export const Tree = (props: MeshProps): React.ReactElement => {
  const { nodes, materials } = getGLTF('/tree.gltf');

  return (
    <mesh
      geometry={nodes.tree.geometry}
      material={materials.treemat}
      {...props}
    />
  );
};
