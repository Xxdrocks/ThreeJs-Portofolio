import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import Gmail from "./Gmail";
import Computer from "./Computer";
import MailComputer from "./MailComputer";
import Mailbox from "./Mailbox";
import Particles from "../../HeroModels/Particles";
import HeroLights from "../../HeroModels/HeroLights";
import Rocket from "./Rocket";

const ContactExperience = () => {
  const Ground = () => {
    const texture = useTexture("../public/images/textures/grass.jpg"); // pastikan file ada di public/textures

    return (
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  };

  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      <ambientLight intensity={0.5} color="#F564A9" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />

      {/* <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          
        </mesh>
      </group> */}
      <Float speed={10} rotationIntensity={1} floatIntensity={3}>
      <group scale={3} castShadow>
        <Rocket />
      </group>
      </Float>
      <Particles count={400} />
    </Canvas>
  );
};

export default ContactExperience;
