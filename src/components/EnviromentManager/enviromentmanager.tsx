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
  STARTING_AREA_SIZE,

} from '../../config';
import { createRemap } from '../../util/numberOps';
import { Tree } from '../GameObjects';

type FoliageData = {
  position: Vector3,
  rotation: number,
  scale: [number, number, number]
  id: string
};

export const EnviromentManager = (): React.ReactElement => {
  const simplex = useRef(new SimplexNoise());
  const [foliage, setFoliage] = useState<FoliageData[]>([]);

  const calculateFoliage = () => {
    const newFoliage:FoliageData[] = [];

    const foliageSizeScalar = createRemap(FOLIAGE_AMOUNT, 1, FOLIAGE_SIZE_VARIATION_LOW, FOLIAGE_SIZE_VARIATION_HIGH);

    // use a remapper to avoid the use of Math.sqrt
    const distanceToCenterScalar = createRemap(0, FLOOR_WIDTH + FLOOR_DEPTH, 0.42, 1);

    const foliageRowSize = FLOOR_WIDTH / (FLOOR_WIDTH * FOLIAGE_DENSITY);
    const foliageColSize = FLOOR_DEPTH / (FLOOR_DEPTH * FOLIAGE_DENSITY);

    const firstRow = -(FLOOR_WIDTH / 2) + foliageRowSize;
    const firstCol = -(FLOOR_DEPTH / 2) + foliageColSize;

    for (let x = firstRow; x < (FLOOR_WIDTH / 2); x += foliageRowSize) {
      for (let y = firstCol; y < (FLOOR_DEPTH / 2); y += foliageColSize) {
        const simplexValue = simplex.current.noise2D(x * NOISE_SCALE, y * NOISE_SCALE);
        const thresholdValue = (simplexValue + 1) / 2;

        const distanceToCenter = distanceToCenterScalar(Math.abs(x) + Math.abs(y)) - STARTING_AREA_SIZE;
        const n = thresholdValue * distanceToCenter;

        if ((n) >= (1 - FOLIAGE_AMOUNT)) {
          const randomScale = foliageSizeScalar(thresholdValue);
          const randomRotation = Math.PI * 2 * Math.random();

          newFoliage.push({
            position: new Vector3(x + simplexValue, 0, y + simplexValue),
            rotation: randomRotation,
            scale: [randomScale, randomScale, randomScale],
            id: v4(),
          });
        }
      }
    }

    setFoliage(newFoliage);
  };

  useEffect(() => {
    calculateFoliage();
  }, []);

  const getComponents = () => foliage.map((singleTree) => (
    <Tree
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
