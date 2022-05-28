import { MeshProps } from '@react-three/fiber';
import React from 'react';
import { StaticReadUsage, Vector2 } from 'three';
import { StoreSlice } from './types';

interface StructureInfo {
  id: string,
  type: React.ComponentType<MeshProps>,
  position: Vector2
}

interface IStructsSlice {
  structsList: StructureInfo[];
  addStructure: (newStruct: StructureInfo) => void;
  removeStructure: (id: string) => void;
  getStructures: () => StructureInfo[];
}

export const createStructuresSlice: StoreSlice<IStructsSlice> = (set, get) => ({
  structsList: [],
  addStructure: (newStruct) => {
    set((state) => ({ ...state, structsList: [...state.structsList, newStruct] }));
  },
  getStructures: () => get().structsList,
  removeStructure: (idToRemove) => {
    set((state) => {
      const index = state.structsList.findIndex((singleStruct) => singleStruct.id === idToRemove);
      if (index > 0) {
        state.structsList.splice(index, 1);
      }
      return state;
    });
  },
});
