import React from 'react';
import { Vector3 } from 'three';
import { v4 } from 'uuid';
import { StructProps } from '../sharedTypes';
import { StoreSlice } from './helperTypes';

interface StructureInfo {
  id: string,
  type: React.ComponentType<StructProps>,
  position: Vector3
}

export interface IStructsSlice {
  structsList: StructureInfo[];
  candidateStruct: React.ComponentType<StructProps> | null;
  addStructure: (newStruct: StructureInfo) => void;
  removeStructure: (id: string) => void;
  setCandidate: (newCandidate: React.ComponentType<StructProps>) => void;
  promoteCurrentCandidate: (position: Vector3) => void;
}

const newStructureFromCandidate = (candidate: React.ComponentType<StructProps>, newPosition: Vector3):StructureInfo => ({
  id: v4(),
  type: candidate,
  position: newPosition,
});

export const createStructuresSlice: StoreSlice<IStructsSlice> = (set, get) => ({
  structsList: [],
  candidateStruct: null,
  addStructure: (newStruct) => {
    set((state) => ({ ...state, structsList: [...state.structsList, newStruct] }));
  },
  removeStructure: (idToRemove) => {
    set((state) => {
      const index = state.structsList.findIndex((singleStruct) => singleStruct.id === idToRemove);
      if (index > 0) {
        state.structsList.splice(index, 1);
      }
      return state;
    });
  },
  setCandidate: (newCandidate) => {
    set((state) => ({ ...state, candidateStruct: newCandidate }));
  },
  promoteCurrentCandidate: (candidatePosition: Vector3) => set((state) => {
    const { candidateStruct } = get();
    if (candidateStruct) {
      return {
        ...state,
        candidateStruct: null,
        structsList: [...state.structsList, newStructureFromCandidate(candidateStruct, candidatePosition)],
      };
    }
    return state;
  }),
});
