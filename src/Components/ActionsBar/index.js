import React, { Component } from "react";

export default class ActionBar extends Component {
  render () {
    return (
      <nav>
        <span><em>Micro-md</em></span>
        {/*<button onClick={this.props.handleCopyClipboard}>Copy to Clipboard</button>*/}
      </nav>
    );
  }
}
