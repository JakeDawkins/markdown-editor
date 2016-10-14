import React, { Component } from "react";

export default class Editor extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange () {
    this.props.onChange(this.refs.input.innerText);
  }

  render () {
    return (
      <div

          onInput={this.handleChange}
          ref="input" contentEditable
          style={{paddingTop: "16px", height: "100%"}}
        />
    );
  }

}

//<textarea style={this.taStyles()} onChange={this.handleChange} ref="input"></textarea>
