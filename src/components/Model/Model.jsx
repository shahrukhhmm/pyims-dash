import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = ({ path }) => {
  const modelRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(path, (gltf) => {
      const model = gltf.scene;

      // Optionally, you can manipulate the model's properties here
      model.scale.set(0.1, 0.1, 0.1); // Example: Scale the model
      model.position.set(0, 0, 0); // Example: Position the model
      model.rotation.y = Math.PI / 2; // Example: Rotate the model

      // Traverse through all meshes and enable shadow casting
      model.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
        }
      });

      // Attach the model to the ref for access outside useEffect
      modelRef.current = model;
    });
  }, [path]);

  return <primitive object={modelRef.current} dispose={null} />;
};

export default Model;
