import React, { Suspense, useEffect } from 'react';
import * as THREE from 'three'
import {Canvas,} from 'react-three-fiber'
import { Html } from '@react-three/drei'
import './App.css';
import Selector from './components/layout/Selector'
import Controls from './components/Controls'
import Plane from './components/Plane.js'
import './App.css';
import Navbar from './components/layout/Navbar'



const hideBtn =()=>{
  const btn1 = document.getElementById('btn-1');
  btn1.style.opacity = '0'

}

const showBtn = () =>{
  const btn1 = document.getElementById('btn-1');
  btn1.style.opacity = '1'
}


function App() {
  return ( 
  <div className="app" >
    <Navbar />
    <div className="container" >
        <Canvas colorManagement camera={{position:[-50,35,400], fov:40}}  onCreated={({gl}) =>{
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }} onPointerDown={hideBtn} onPointerUp={showBtn}>
        <Suspense fallback={<Html>Loading...</Html>}>
        <ambientLight position={[0,0,0]} color={['#798c7c']} intensity={2} />
        <spotLight position={[0,1000,100]} penumbra={1} castShadow />
        <spotLight intensity={1} position={[-50,0,-10]} penumbra={1} castShadow />
        <directionalLight position={[30,20, 10]} intensity={1.5} castShadow />
        <directionalLight 
        castShadow
        position={[0,20,-10]} intensity={.5}
         />
        <directionalLight 
        castShadow
        position={[-50,0,-10]} intensity={.5}
         />
        <Plane position={[0,-100,0]} />
        <fog attach="fog" args={['#798c7c',400,600]} />
        <Selector />
        <Controls  />
        </Suspense>
      </Canvas>  
  </div>
  </div>
  );
}

export default App;
