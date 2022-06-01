import { MeshProps } from '@react-three/fiber';
import React from 'react';
import { Color } from 'three';
import { getGLTF } from '../../../util/gltfLoader';
import { pickInGradientByWeight } from '../../../util/numberOps';

export const Tree = (props: MeshProps): React.ReactElement => {
  const { nodes, materials } = getGLTF('/tree.gltf');
  const randomWeathering = pickInGradientByWeight([255, 202, 133], [255, 255, 255], Math.random());

  return (
    <mesh
      geometry={nodes.tree.geometry}
      {...props}
    >
      <meshStandardMaterial
        {...materials.treemat}
        color={new Color(`rgb(${randomWeathering[0]}, ${randomWeathering[1]}, ${randomWeathering[2]})`)}
      />
    </mesh>
  );
};
