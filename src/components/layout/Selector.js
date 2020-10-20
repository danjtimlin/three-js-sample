import React, { useEffect, useState } from 'react'
import Device from '../Device'
import Device2 from '../Device2'

const Selector = () => {
  const [selector, setSelector] = useState(null);
  useEffect(() => {
    function buttonLogger(){
      var id = document.getElementsByClassName('btn')[0].id;
      document.onmousedown = (e) => {
        console.log(e);
        switch (id){
          case 'redButton':
            setSelector('Device');
            break;
          case 'whiteButton':
            setSelector('Device2');
            break;
            default:
              setSelector("Device2");
              break;
        }
      }
    };
    buttonLogger();
  });
  
  switch (selector){
    case 'Device':
      return(
        <>
          <Device position={[-50,-90,0]} url={"/models/RED.gltf"} />
        </>
      );
      case 'Device2':
        return(
          <>
            <Device2 className='deviceWhite' url="/models/WHITE.gltf" position={[-50,-90,0]} />
          </>
        );
      default:
        return(
          <>
           <Device position={[-50,-90,0]} url={"/models/WHITE.gltf"} />    
          </>
        )
      
  }
  
}

export default Selector


