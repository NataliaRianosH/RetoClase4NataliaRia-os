import { OrbitControls, SpotLight, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Floor from './Floor'
import * as THREE from 'three';

import { DirectionalLightHelper, PointLightHelper, RectAreaLight, HemisphereLightHelper } from 'three';
import Pared from './Pared'
import { useRef } from 'react'

export default function Experience() {
    //const directionalLightRef = useRef()
    // useHelper(directionalLightRef, DirectionalLightHelper, 1)

    //const hemisphereRef = useRef()
    //useHelper(hemisphereRef, HemisphereLightHelper)

    // const pointLightRef = useRef()
    //useHelper(pointLightRef, PointLightHelper, 1, 'red')
   
    //const rectAreaLightRef = useRef()
    
     const spotLightRef = useRef()
     useHelper( spotLightRef, THREE.SpotLightHelper, 1, 'red')
    
   
   return <>
        
        <Perf position="top-left" />
        <OrbitControls makeDefault />

        {/*  <directionalLight castShadow ref={directionalLightRef} position={[4, 10, -6]} intensity={1.5} /> */} 
        {/* <hemisphereLight castShadow ref={hemisphereRef} position={[2, 3, -8]} intensity={1.5} />  */}
        {/*<pointLight castShadow ref={pointLightRef} position={[4, 6, -5]} intensity={1.5}/> */}
         {/*<rectAreaLight castShadow ref={rectAreaLightRef} width={15} position={[2, 2, 2]} intensity={10} color={'White'}/>*/}
         <spotLight castShadow ref={ spotLightRef} position={[5, 2, -4]} intensity={1.5} />

        <ambientLight intensity={0.5} />
        <Door/>
        <Floor/>
        <mesh position={ [ -2.2, 0, 0.75] } >
        <Pared />
        </mesh>
        <mesh position={ [ 2.2, 0 , 0.75] } >
        <Pared />
        </mesh>
        
        
       
    </>
}