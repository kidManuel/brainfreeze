import { MeshProps } from '@react-three/fiber';
import { Vector3 } from 'three';
import { v4 } from 'uuid';
import SimplexNoise from 'simplex-noise';
import {
  FOLIAGE_AMOUNT,
  FLOOR_WIDTH,
  FLOOR_DEPTH,
  FOLIAGE_DENSITY,
  NOISE_SCALE,
  STARTING_AREA_SIZE,
  ROCKS_AMOUNT,
  MUSHROOM_THRESHOLD,
  FOLIAGE_SIZE_DELTA,
  MUSHROOM_SIZE_DELTA,
  ROCKS_SIZE_DELTA,
} from '../../config';
import { createRemap, randomIntFromInterval } from '../../util/numberOps';
import { Tree, Rocks } from '../GameObjects';
import { Mushroom } from '../GameObjects/Mushroom';

export type EnviromentData = {
  Type: React.ComponentType<MeshProps>,
  position: Vector3,
  rotation: number,
  scale: [number, number, number]
  id: string
};

export const calculateNature = () => {
  const simplex = new SimplexNoise();
  const newEnviromentList:EnviromentData[] = [];

  const foliageSizeScalar = createRemap(FOLIAGE_AMOUNT, 1, FOLIAGE_SIZE_DELTA[0], FOLIAGE_SIZE_DELTA[1]);
  // use a remapper to avoid the use of Math.sqrt
  const distanceToCenterScalar = createRemap(0, FLOOR_WIDTH + FLOOR_DEPTH, 0.42, 1);

  const foliageRowSize = FLOOR_WIDTH / (FLOOR_WIDTH * FOLIAGE_DENSITY);
  const foliageColSize = FLOOR_DEPTH / (FLOOR_DEPTH * FOLIAGE_DENSITY);

  const firstRow = -(FLOOR_WIDTH / 2) + foliageRowSize;
  const firstCol = -(FLOOR_DEPTH / 2) + foliageColSize;

  const pushTree = (x:number, y:number, thresholdValue:number, simplexValue:number) => {
    const randomScale = foliageSizeScalar(thresholdValue);
    const randomRotation = Math.PI * 2 * Math.random();

    newEnviromentList.push({
      Type: Tree,
      position: new Vector3(x + simplexValue, 0, y + simplexValue),
      rotation: randomRotation,
      scale: [randomScale, randomScale, randomScale],
      id: v4(),
    });
  };

  const pushMushroom = (x:number, y:number, simplexValue:number) => {
    const randomScale = randomIntFromInterval(MUSHROOM_SIZE_DELTA[0], MUSHROOM_SIZE_DELTA[1]);
    const randomRotation = Math.PI * 2 * Math.random();

    newEnviromentList.push({
      Type: Mushroom,
      position: new Vector3(x + simplexValue, 0, y + simplexValue),
      rotation: randomRotation,
      scale: [randomScale, randomScale, randomScale],
      id: v4(),
    });
  };

  const pushRocks = () => {
    const xPos = randomIntFromInterval(-FLOOR_WIDTH / 2, FLOOR_WIDTH / 2);
    const yPos = randomIntFromInterval(-FLOOR_DEPTH / 2, FLOOR_DEPTH / 2);
    const randomRotation = Math.PI * 2 * Math.random();
    const randomScale = randomIntFromInterval(ROCKS_SIZE_DELTA[0], ROCKS_SIZE_DELTA[1]);

    newEnviromentList.push({
      Type: Rocks,
      position: new Vector3(xPos, 0, yPos),
      rotation: randomRotation,
      scale: [randomScale, randomScale, randomScale],
      id: v4(),
    });
  };

  for (let x = firstRow; x < (FLOOR_WIDTH / 2); x += foliageRowSize) {
    for (let y = firstCol; y < (FLOOR_DEPTH / 2); y += foliageColSize) {
      // Node Calculations
      const simplexValue = simplex.noise2D(x * NOISE_SCALE, y * NOISE_SCALE);
      const thresholdValue = (simplexValue + 1) / 2;

      const distanceToCenter = distanceToCenterScalar(Math.abs(x) + Math.abs(y)) - STARTING_AREA_SIZE;
      const finalDelta = thresholdValue * distanceToCenter;

      // Start placements
      if (finalDelta >= (1 - FOLIAGE_AMOUNT)) {
        pushTree(x, y, thresholdValue, simplexValue);
      } else if (finalDelta >= (1 - FOLIAGE_AMOUNT - MUSHROOM_THRESHOLD)) {
        pushMushroom(x, y, simplexValue);
      }
    }
  }

  for (let n = 0; n < ROCKS_AMOUNT; n++) {
    pushRocks();
  }

  return newEnviromentList;
};
