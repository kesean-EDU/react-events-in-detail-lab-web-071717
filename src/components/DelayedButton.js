import React from 'react'

class DelayedButton extends React.Component{

  doTheThing = (event) => {
    event.persist()
    window.setTimeout(() => { this.props.onDelayedClick(event) }, this.props.delay)
  }

  render(){
    return (
      <button onClick={this.doTheThing}>
      </button>
    )
  }

}

export default DelayedButton
