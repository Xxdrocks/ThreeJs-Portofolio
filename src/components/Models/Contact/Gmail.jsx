import { useGLTF } from "@react-three/drei";

export function Gmail(props) {
  const { nodes, materials } = useGLTF(
    "/models/creative_gmail_mailbox-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube_Material_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.025, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube002_Material015_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0, -1.113, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.292, 1.175, 0.031]}
      />
      <mesh
        geometry={nodes.Cube002_Material013_0.geometry}
        material={materials["Material.013"]}
        position={[0, -1.113, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.292, 1.175, 0.031]}
      />
      <mesh
        geometry={nodes.Cube022_white_emmision_0.geometry}
        material={materials.PaletteMaterial003}
        position={[-1.008, -0.224, -0.046]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.006, 0.551, 0.514]}
      />
    </group>
  );
}

useGLTF.preload("/creative_gmail_mailbox-transformed.glb");

export default Gmail;
