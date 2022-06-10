import React, { useEffect, useState } from 'react';
import { calculateNature, EnviromentData } from './func';

export const EnviromentManager = (): React.ReactElement => {
  const [foliage, setFoliage] = useState<EnviromentData[]>([]);

  const getFoliage = () => {
    setFoliage(calculateNature());
  };

  useEffect(() => {
    getFoliage();
  }, []);

  const getComponents = () => foliage.map((envEntity) => (
    <envEntity.Type
      position={envEntity.position}
      rotation={[0, envEntity.rotation, 0]}
      scale={envEntity.scale}
      key={envEntity.id}
    />
  ));

  return (
    <>
      {getComponents()}
    </>
  );
};
