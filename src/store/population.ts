import produce from 'immer';
import { Vector3 } from 'three';
import { StoreSlice } from './helperTypes';

export interface PathInformation {
  angle: Vector3;
  id: string;
  origin: Vector3;
  population: SinglePawnInfo[],
}

type PopulationInfo = Record<string, PathInformation>;
export type SinglePawnInfo = {
  pawnId: string,
  directionUpdated: boolean,
  inputDirection: Vector3,
  origin: Vector3
};

export interface IPopSlice {
  populationList: PopulationInfo;
  addPawn: (parentId: string, pawnInfo: SinglePawnInfo) => void;
  addRoute: (routeInfo: PathInformation) => void;
}

export const createPopulationSlice: StoreSlice<IPopSlice> = (set) => ({
  populationList: {},
  addPawn: (parentId, pawnInfo) => {
    set(produce((state) => {
      state.populationList[parentId].population.push(pawnInfo);
    }));
  },
  addRoute: (routeInfo) => {
    set(produce((state) => {
      state.populationList[routeInfo.id] = routeInfo;
    }));
  },
});
