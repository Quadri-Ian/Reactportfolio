import React, { Suspense, useState, useEffect, startTransition } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Brainimage from '../Images/justmouse.glb';

// Component to load and render the 3D brain model
function BrainModel() {
  const { scene } = useGLTF(Brainimage); // Replace with the path to your brain model
  const [scale, setScale] = useState(getScale(window.innerWidth));

  // Function to determine scale based on window width
  function getScale(width) {
    if (width < 600) {
      return [20.0, 20.0, 20.0]; // Small scale for mobile
    } else if (width < 1200) {
      return [33.5, 33.5, 33.5]; // Medium scale for tablets
    } else{
      return [40.5, 40.5, 40.5]; // Larger scale for desktops
    }
  }

  // Update the scale when the window is resized
  useEffect(() => {
    const handleResize = () => {
      startTransition(() => {
        setScale(getScale(window.innerWidth));
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <primitive object={scene} scale={scale} />
  );
}

// Main component for rendering the 3D model and canvas
const RotatingBrain = () => {
  return (
    <div style={{ width: '100vw', height: '80vh', overflow: '' }}>
      <Canvas style={{  }}>
        <ambientLight  />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Suspense fallback={null}>
          <BrainModel />
        </Suspense>

        <OrbitControls enableZoom={false} 
  />
      </Canvas>
    </div>
  );
};

export default RotatingBrain;
