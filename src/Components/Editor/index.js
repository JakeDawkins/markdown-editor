import React, { Component } from "react";

export default class Editor extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  taStyles (classes) {
    return {
      width: "40%",
      height: "100%",
      marginRight:"5%",
      backgroundColor: "#eeeeee",
      display: "inline-block"
    }
  }

  handleChange () {
    console.log(this.refs);
    let md = this.refs.input.innerText;
    this.props.onChange(md);
  }

  render () {
    return (
      <div style={this.taStyles()} onInput={this.handleChange} ref="input" contentEditable />
    );
  }

}

//<textarea style={this.taStyles()} onChange={this.handleChange} ref="input"></textarea>
