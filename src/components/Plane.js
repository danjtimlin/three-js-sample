import React from 'react'


const Plane = ({position}) =>{
  return(
    <mesh rotation={[-Math.PI / 2,0,0]} position={position} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[2000,2000]} />
      <meshPhysicalMaterial attach="material" color='#010d00' />
    </mesh>
  );
}

export default Plane
