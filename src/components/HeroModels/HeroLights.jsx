import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        intensity={100}
        angle={0.15}
        penumbra={0.5}
      />
      <spotLight
        position={[4, 5, 4]}
        intensity={50}
        angle={0.3}
        penumbra={0.5}
        color={"#4cc0f0"}
      />
      <spotLight
        position={[3, 1, 1]}
        intensity={100}
        penumbra={0.4}
        color={"#9d4edd"}
      />

      <primitive 
      object={new THREE.RectAreaLight('#a259ff', 8, 2, 2)}
      position={[1, 3, 4]}
      intensity={15}
      rotation={[-Math.PI / 2, Math.PI / 4, 0]}
      />

      <pointLight
        position={[1, 2, -2]}
        intensity={10}
        color={"#7209B7"}
      />  
      
    </>
  );
};

export default HeroLights;
