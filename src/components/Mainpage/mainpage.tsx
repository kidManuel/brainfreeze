import { Canvas } from "@react-three/fiber";
import React from "react";

export const Mainpage = ():React.ReactElement => {
    return <>
        <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }} >

        </Canvas>
    
    </>
}