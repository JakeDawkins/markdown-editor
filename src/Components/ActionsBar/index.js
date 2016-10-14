import React, { Component } from "react";

export default class ActionBar extends Component {
  showHelp () {
    alert("Type valid markup on the left\nTo copy the JSON safe string, triple click the line");
  }

  render () {
    return (
      <nav>
        <span><em>Micro-md</em></span>
        <button onClick={this.props.handleConvert}>Convert to JSON String</button>
        <button onClick={this.showHelp}>Help</button>
      </nav>
    );
  }
}
