import { MeshProps } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import SimplexNoise from 'simplex-noise';
import { Vector3 } from 'three';
import { v4 } from 'uuid';
import {
  FLOOR_DEPTH,
  FLOOR_WIDTH,
  FOLIAGE_AMOUNT,
  FOLIAGE_DENSITY,
  FOLIAGE_SIZE_VARIATION_HIGH,
  FOLIAGE_SIZE_VARIATION_LOW,
  NOISE_SCALE,
  ROCKS_AMOUNT,
  STARTING_AREA_SIZE,

} from '../../config';
import { createRemap, randomIntFromInterval } from '../../util/numberOps';
import { Rocks, Tree } from '../GameObjects';

type EnviromentData = {
  Type: React.ComponentType<MeshProps>,
  position: Vector3,
  rotation: number,
  scale: [number, number, number]
  id: string
};

export const EnviromentManager = (): React.ReactElement => {
  const simplex = useRef(new SimplexNoise());
  const [foliage, setFoliage] = useState<EnviromentData[]>([]);

  const calculateFoliage = () => {
    const newEnviromentList:EnviromentData[] = [];

    const foliageSizeScalar = createRemap(FOLIAGE_AMOUNT, 1, FOLIAGE_SIZE_VARIATION_LOW, FOLIAGE_SIZE_VARIATION_HIGH);
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

    const pushRocks = () => {
      const xPos = randomIntFromInterval(-FLOOR_WIDTH / 2, FLOOR_WIDTH / 2);
      const yPos = randomIntFromInterval(-FLOOR_DEPTH / 2, FLOOR_DEPTH / 2);
      const randomRotation = Math.PI * 2 * Math.random();
      const randomScale = randomIntFromInterval(1, 2.5);

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
        const simplexValue = simplex.current.noise2D(x * NOISE_SCALE, y * NOISE_SCALE);
        const thresholdValue = (simplexValue + 1) / 2;

        const distanceToCenter = distanceToCenterScalar(Math.abs(x) + Math.abs(y)) - STARTING_AREA_SIZE;
        const finalDelta = thresholdValue * distanceToCenter;

        if (finalDelta >= (1 - FOLIAGE_AMOUNT)) {
          pushTree(x, y, thresholdValue, simplexValue);
        }
      }
    }

    for (let n = 0; n < ROCKS_AMOUNT; n++) {
      pushRocks();
    }

    setFoliage(newEnviromentList);
  };

  useEffect(() => {
    calculateFoliage();
  }, []);

  const getComponents = () => foliage.map((singleTree) => (
    <singleTree.Type
      position={singleTree.position}
      rotation={[0, singleTree.rotation, 0]}
      scale={singleTree.scale}
      key={singleTree.id}
    />
  ));

  return (
    <>
      {getComponents()}
    </>
  );
};
