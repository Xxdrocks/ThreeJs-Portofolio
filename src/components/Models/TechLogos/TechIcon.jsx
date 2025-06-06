import { Environment, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import  { useEffect } from 'react'
import * as THREE from 'three'
import { Mesh, MeshStandardMaterial } from 'three'
import { color } from 'three/tsl'

const TechIcon = ({model}) => {

    const scene = useGLTF( model.modelPath );
    useEffect(() => {
        if(model.name === 'Interactive Developer') {
            scene.scene.traverse((child) =>{
                if(child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({color: 'white'})
                }
            })
        }
    }, [scene])
  return (
   <Canvas>
    <ambientLight intensity={0.5}/>
    <Environment preset="city" />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <OrbitControls enableZoom={false}/>

    <Float speed={7.5} rotationIntensity={1} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
        </group>
    </Float>
   </Canvas>
  )
}

export default TechIcon
