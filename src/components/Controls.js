import React from 'react';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {extend, useThree, useFrame } from 'react-three-fiber';


extend({OrbitControls});

const Controls = () => {
  const {
    camera,
    gl: { domElement},
  } = useThree()
  const controls = useRef()
  useFrame((state) => controls.current.update())

    return (
        <orbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          ref={controls}
          args={[camera, domElement]}
        />
    )
}

export default Controls
