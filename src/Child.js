import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div
        className="child"
        style={{backgroundColor: this.props.color}}
        onClick={this.props.handleColorChange}
      />
    )
  }
}

export default Child
