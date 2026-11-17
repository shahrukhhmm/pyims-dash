import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Model component that loads GLTF model based on provided path
function Model(props) {
  const { scene } = useGLTF(props.path);
  return <primitive object={scene} />;
}

export default function RenderContent() {
  return (
    <Canvas
      style={{ height: "700px" }}
      pixelRatio={[1, 2]}
      camera={{ position: [-10, 15, 15], fov: 50 }}
    >
      {/* Ambient light to illuminate the scene */}
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        {/* Load multiple models using the Model component */}
        <Model path="/public/assets/ImageToStl.com_brain (1).gltf" />
       
        {/* Add more Model components with different paths as needed */}
      </Suspense>
      {/* OrbitControls for easy navigation */}
      <OrbitControls />
      
    </Canvas>
    
  );
}
