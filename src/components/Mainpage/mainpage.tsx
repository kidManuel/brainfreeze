import { PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Base } from "..";
import { Arrow } from "../Arrow";
import { Floor } from "../Floor";

export const Mainpage = (): React.ReactElement => {
  return (
    <>
      <Canvas flat dpr={[1, 2]} camera={{ position: [5, 15, 0] }}>
        <PresentationControls global zoom={1} polar={[0, 0]}>
          <ambientLight intensity={0.5} />
          <Floor />
          {/* <Base position={[0, 0.75, 0]} /> */}
          <directionalLight />
          <Arrow />
        </PresentationControls>
      </Canvas>
    </>
  );
};
