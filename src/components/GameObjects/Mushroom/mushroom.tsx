import { MeshProps } from '@react-three/fiber';
import React from 'react';
import { Color } from 'three';
import { getGLTF } from '../../../util/gltfLoader';
import { pickInGradientByWeight } from '../../../util/numberOps';

export const Mushroom = (props: MeshProps): React.ReactElement => {
  const { nodes, materials } = getGLTF('/mush.gltf');
  const randomWeathering = pickInGradientByWeight([178, 235, 240], [255, 199, 219], Math.random());

  return (
    <mesh
      geometry={nodes.mush.geometry}
      {...props}
    >
      <meshStandardMaterial
        {...materials.mushmat}
        color={new Color(`rgb(${randomWeathering[0]}, ${randomWeathering[1]}, ${randomWeathering[2]})`)}
      />
    </mesh>
  );
};
