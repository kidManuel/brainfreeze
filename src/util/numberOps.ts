/* eslint-disable no-mixed-operators */

type RemapperCreator = (a: number) => number;

export const createRemap = (inMin: number, inMax: number, outMin: number, outMax: number):RemapperCreator => {
  const remaper = (x : number):number => (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  return remaper;
};

export const lerp = (a: number, x: number, y: number) => x * (1 - a) + y * a;

export const randomIntFromInterval = (min:number, max:number) : number => Math.floor(Math.random() * (max - min + 1) + min);

type HexData = [number, number, number];

export const pickInGradientByWeight = (color1:HexData, color2:HexData, weight:number) => {
  const w1 = weight;
  const w2 = 1 - w1;
  const rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
    Math.round(color1[1] * w1 + color2[1] * w2),
    Math.round(color1[2] * w1 + color2[2] * w2)];
  return rgb;
};
