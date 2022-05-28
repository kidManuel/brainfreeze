import React from 'react';
import { Vector3 } from 'three';
import { StructProps } from '../types';
import { StoreSlice } from './helperTypes';

interface StructureInfo {
  id: string,
  type: React.ComponentType<StructProps>,
  position: Vector3
}

export interface IStructsSlice {
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
