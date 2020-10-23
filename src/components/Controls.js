import React from 'react';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {extend, useThree, useFrame } from 'react-three-fiber';


extend({OrbitControls});


          // maxPolarAngle={Math.PI / 1}
          // minPolarAngle={Math.PI / 1}



const Controls = () => {
  const {
    camera,
    gl: { domElement},
    
  } = useThree()

  const controls = useRef()
  useFrame((state) => controls.current.update())
  

    return (

        <orbitControls
          autoRotate={true}
          autoRotateSpeed={[0.5]}
          maxDistance={[400]}
          enableDamping={true}
          ref={controls}
          args={[camera, domElement]}
        />

    )
    
}

export default Controls
