import React from "react";
import { useGLTF } from "@react-three/drei";

export function Cyber(props) {
  const { nodes, materials } = useGLTF("/models/cyber-room.glb");
  return (
    <group {...props} dispose={null} scale={1.8}>
      <mesh
        geometry={nodes.Cyber_Punk_Room_Material_0.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/cyber-room.glb");
