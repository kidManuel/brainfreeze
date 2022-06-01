import React, { useEffect, useState } from 'react';
import { calculateNature, EnviromentData } from './func';

export const EnviromentManager = (): React.ReactElement => {
  const [foliage, setFoliage] = useState<EnviromentData[]>([]);

  const placeFoliage = () => {
    setFoliage(calculateNature());
  };

  useEffect(() => {
    placeFoliage();
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
