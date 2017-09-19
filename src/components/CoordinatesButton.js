import React from 'react'

class CoordinatesButton extends React.Component {

    getCoord = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }


  render(){
    return (
      <button onClick={this.getCoord}></button>
    )
  }
}

export default CoordinatesButton
