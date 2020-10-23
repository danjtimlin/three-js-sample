import React, { Fragment } from 'react'
import Device from '../Device'
import Device2 from '../Device2'
import {Html} from 'drei'


class Selector extends React.Component {
  //state
  constructor(){
    super();
    this.state = { isRed: false }
  }


  //set up the bool isRed
  _isRed = (bool) =>{
    this.setState({
      isRed: bool
    });
  }


  render(){
    return(
      <Fragment>
      <Html>
        <div className="btn-group-selector" id="btn-1" >
          <button className="btn btn-selector" onPointerOver={this._isRed.bind(null, true)}>Red</button>
          <button  className="btn btn-selector" onPointerOver={this._isRed.bind(null, false)}>White</button>
        </div>
      </Html>
      { this.state.isRed === true ? (<Device position={[-50,-90,0]} url={"./models/RED.gltf"} /> ) :(<Device2 position={[-50,-90,0]} url={"./models/WHITE.gltf"} />) }

      </Fragment>
    )
  }

}


export default Selector 