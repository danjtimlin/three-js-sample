import React from 'react'
import Device from '../Device'
import Device2 from '../Device2'
import {Html} from 'drei'



class Selector extends React.Component {
  constructor(){
    super();
    this.state = { isRed: false }
  }



  _isRed = (bool) =>{
    this.setState({
      isRed: bool
    });
  }


  render(){
    return(
      <>
      <Html>
      <button className="btn" onClick={this._isRed.bind(null, true)}>Red</button>
      <button className="btn" onClick={this._isRed.bind(null, false)}>White</button>
      </Html>
      { this.state.isRed === true ? (<Device position={[-50,-90,0]} url={"/models/RED.gltf"} /> ) :(<Device2 position={[-50,-90,0]} url={"/models/WHITE.gltf"} />) }

      </>
    )
  }

}


export default Selector 