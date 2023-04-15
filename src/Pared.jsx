import { DirectionalLight, DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function Pared() {
    const PATH = "/static/textures/pared/"

    const props = useTexture({
        map: PATH + 'color.png',
     
        normalMap: PATH + 'normal.png',
        roughnessMap: PATH + 'roughness.png',
        aoMap: PATH + 'ao.png',
        metalnessMap: PATH + 'metallic.png'
    })

    return (
        <mesh receiveShadow = {true}
        castShadow = {true} >
            
            <boxGeometry args={[ 2.5, 3]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}
