import { useAnimations, useGLTF } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

import { Suspense, useEffect, useRef, useState } from "react";

import spacemanScene from "../../public/space/falling.glb";

import { OrbitControls } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Spaceman = ({ isMobile}) => {
  const spacemanRef = useRef();
  
  const { scene, animations } = useGLTF(spacemanScene);

  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {

    actions["Idle"].play();
  
  }, [actions]);

  return (
    <mesh ref={spacemanRef}>
      
      <primitive 
      
          object = {scene}

          scale = {isMobile ? 0.4: 0.6}
                 
          position ={isMobile ? [0, -0.7, 0] : [0, -0.7, 0]}
                 
          rotation ={[0, -1, 0]}
          
          />
    
    </mesh>
  );
};

const SpacemanCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const size = window.matchMedia('(max-width: 500px)');

    setIsMobile(size.matches);

    const handleOnSizeChange = (event) =>{ setIsMobile(event.matches); }

    size.addEventListener('change', handleOnSizeChange);

    return () => size.removeEventListener('change', handleOnSizeChange);
  
  }, []);

  return (
    <Canvas className={`w-full h-screen bg-transparent z-10`}
    
    camera = {{position: [0, 0, -2], far: 1000, near : 0.1}}>
      
      <Suspense fallback = {<CanvasLoader/>}>

          <directionalLight position={[1, 1, 1]} intensity={2} />
          
          <ambientLight intensity={0.5} />
          
          <pointLight position={[10, 5, 10]} intensity={2} />
          
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <OrbitControls enableZoom ={false}
            
                          maxPolarAngle={Math.PI / 2}
                            
                          minPolarAngle={Math.PI / 2}
            />
            
          <Spaceman isMobile={isMobile} />
        
      </Suspense>
    
    </Canvas>
  );
};

export default SpacemanCanvas;