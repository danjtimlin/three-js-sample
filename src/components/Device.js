import React,{ useRef, useState}  from 'react'
import {draco} from "drei"
import{useSpring, a} from "react-spring/three";
import {useLoader} from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Device = ({ url, position }) => {
  const mesh = useRef(null);
  
  //expand effect zoom looks better so not enabled
  const [expand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.2,1.2,1.2] : [1,1,1],
  });
  
  //loader for model
  const { scene } = useLoader(GLTFLoader, url, draco())
  return (
      <a.primitive
      {...props}
      className="device"
      // onPointerEnter={() => setExpand(!expand)}
      scale={props.scale}   
      object={scene}
      locale={[0,1,-2]} 
      dispose={null} 
      position={position} 
      ref={mesh}
      url={url}
      castShadow
       /> 
       
    )
}

export default Device