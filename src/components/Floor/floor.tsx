import React from "react";

const FLOOR_HEIGHT = 0.3;

export const Floor = (): React.ReactElement => {
  return (
    <mesh
      //   onPointerDown={(state) => console.log(state)}
      //   onPointerUp={() => console.log("mouse Up")}
      position={[0, -FLOOR_HEIGHT / 2, 0]}
    >
      <boxGeometry args={[50, 0.3, 50]} />
      <meshStandardMaterial color={"darkseagreen"} />
    </mesh>
  );
};
