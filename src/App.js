import React, { Suspense } from 'react';
import * as THREE from 'three'
import {Canvas,} from 'react-three-fiber'
import { Html } from '@react-three/drei'
import './App.css';
// import Device from './components/Device.js'
import Selector from './components/layout/Selector'
import Controls from './components/Controls'
import Plane from './components/Plane.js'
import './App.css';
import Navbar from './components/layout/Navbar'
// import RedButton from './components/layout/RedButton'
// import WhiteButton from './components/layout/WhiteButton'



// const hideBtn =()=>{
//   const btn1 = document.getElementById('btn-1');
//   console.log('MouseDown')
//   btn1.style.display = 'none'
// }

// const showBtn = () =>{
//   const btn1 = document.getElementById('btn-1');
//   console.log('MouseUp')
//   btn1.style.display = ''
// }


//   useEffect(() => {
//   window.addEventListener("onMouseDown", hideBtn());
//   window.addEventListener("onMouseUp", showBtn());
//   return() =>{
//     window.removeEventListener("onMouseDown", hideBtn());
//     window.removeEventListener("onMouseUp", showBtn());
//   }
// }, [])




function App() {
  return ( 
  <div className="app"  >
    <Navbar />
    <div className="container"  >
        <Canvas  colorManagement camera={{position:[-50,35,400], fov:40}}  onCreated={({gl}) =>{
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
        <Suspense fallback={<Html>Loading...</Html>}>
        <ambientLight intensity={1.5} />
        <spotLight position={[0,1000,100]} penumbra={1} castShadow />
        <spotLight intensity={3} position={[-50,0,-10]} penumbra={1} castShadow />
        <directionalLight position={[30,20, 10]} intensity={2} castShadow />
        <directionalLight 
        castShadow
        position={[0,20,-10]} intensity={1.2}
         />
        <directionalLight 
        castShadow
        position={[-50,0,-10]} intensity={2}
         />
        <Plane position={[0,-100,0]} />
        <fog attach="fog" args={['#d9d9d9',400,600]} />

        <Selector />
        <Controls  />
        </Suspense>
      </Canvas>
      
  </div>
  </div>
  );
}

export default App;
