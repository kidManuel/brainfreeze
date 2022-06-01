/* eslint-disable no-mixed-operators */

type RemapperCreator = (a: number) => number;

export const createRemap = (inMin: number, inMax: number, outMin: number, outMax: number):RemapperCreator => {
  const remaper = (x : number):number => (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  return remaper;
};

export const lerp = (a: number, x: number, y: number) => x * (1 - a) + y * a;
