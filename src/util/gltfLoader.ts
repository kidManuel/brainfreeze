import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Material, Mesh } from 'three';

export type GLTFResult = GLTF & {
  nodes: Record<string, Mesh>;
  materials: Record<string, Material>;
};

// Unupdated types on Drei ffs
export const getGLTF = (path: string):GLTFResult => useLoader(GLTFLoader, path) as GLTFResult;
