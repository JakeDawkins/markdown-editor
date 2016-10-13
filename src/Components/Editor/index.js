import React, { Component } from "react";

export default class Editor extends Component {

  taStyles (classes) {
    return {
      width: "50%",
      height: "50%"
    }
  }

  render () {
    return (
      <textarea style={this.taStyles()}></textarea>
    );
  }

}
